import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode: string;
  householdIncome?: string;
  healthStatus?: string;
  dob?: string;
  email?: string;
  phone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();
    const { zipCode } = body;

    if (!zipCode || zipCode.length !== 5) {
      return NextResponse.json(
        { error: 'Invalid zip code' },
        { status: 400 }
      );
    }

    const ringbaToken = process.env.RINGBA_API_TOKEN;

    const results = {
      ringba: { success: false, error: null as string | null },
      leadProsper: { success: false, error: null as string | null },
    };

    // Submit to Ringba API
    if (ringbaToken) {
      try {
        const ringbaResponse = await fetch('https://api.ringba.com/v2/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${ringbaToken}`,
          },
          body: JSON.stringify({
            firstName: body.firstName,
            lastName: body.lastName,
            address: body.address,
            city: body.city,
            state: body.state,
            zipCode: body.zipCode,
            email: body.email,
            phone: body.phone?.replace(/\D/g, ''),
            householdIncome: body.householdIncome,
            healthStatus: body.healthStatus,
            dateOfBirth: body.dob,
            source: 'website',
            landingPage: request.headers.get('referer') || 'homepage',
            timestamp: new Date().toISOString(),
            metadata: {
              userAgent: request.headers.get('user-agent'),
              ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
            }
          }),
        });

        if (ringbaResponse.ok) {
          results.ringba.success = true;
        } else {
          results.ringba.error = await ringbaResponse.text();
          console.error('Ringba API error:', results.ringba.error);
        }
      } catch (error) {
        results.ringba.error = error instanceof Error ? error.message : 'Unknown error';
        console.error('Ringba submission error:', error);
      }
    }

    // Submit to Lead Prosper API
    try {
      // Lead Prosper Direct Post API
      const leadProsperResponse = await fetch('https://api.leadprosper.io/direct_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Required Lead Prosper fields
          lp_campaign_id: '4576',
          lp_supplier_id: '9357',
          lp_key: 'v52s3lnu3n5',
          lp_action: '', // empty for live, 'test' for testing
          lp_subid1: request.headers.get('referer') || 'homepage',
          lp_subid2: '',
          // Lead data
          fname: body.firstName || '',
        }),
      });

      const responseData = await leadProsperResponse.json();

      if (responseData.status === 'ACCEPTED') {
        results.leadProsper.success = true;
      } else {
        results.leadProsper.error = responseData.message || responseData.status;
        console.error('Lead Prosper API error:', responseData);
      }
    } catch (error) {
      results.leadProsper.error = error instanceof Error ? error.message : 'Unknown error';
      console.error('Lead Prosper submission error:', error);
    }

    // Return success if at least one submission worked, or if we have the basic data
    const anySuccess = results.ringba.success || results.leadProsper.success;

    return NextResponse.json({
      success: true, // Always return success to not block UX
      message: anySuccess ? 'Lead submitted successfully' : 'Lead received',
      phoneNumber: '833-312-4339',
      results: process.env.NODE_ENV === 'development' ? results : undefined,
    });

  } catch (error) {
    console.error('Error submitting lead:', error);

    // Return success anyway to not break UX
    return NextResponse.json({
      success: true,
      message: 'Lead received',
      phoneNumber: '833-312-4339'
    });
  }
}
