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

    console.log('=== LEAD SUBMISSION RECEIVED ===');
    console.log('Body:', JSON.stringify(body));

    if (!zipCode || zipCode.length !== 5) {
      console.log('Invalid zip code:', zipCode);
      return NextResponse.json(
        { error: 'Invalid zip code' },
        { status: 400 }
      );
    }

    const results = {
      ringba: { success: false, error: null as string | null },
      leadProsper: { success: false, error: null as string | null },
    };

    // Submit to Ringba Enrich API
    if (body.phone) {
      try {
        const phoneNumber = body.phone.replace(/\D/g, '');
        const e164Phone = phoneNumber.startsWith('1') ? `+${phoneNumber}` : `+1${phoneNumber}`;

        const enrichUrl = new URL('https://display.ringba.com/enrich/2867709378390131869');
        enrichUrl.searchParams.set('callerid', e164Phone);
        enrichUrl.searchParams.set('firstName', body.firstName || '');
        enrichUrl.searchParams.set('lastName', body.lastName || '');
        enrichUrl.searchParams.set('zipCode', body.zipCode || '');
        enrichUrl.searchParams.set('email', body.email || '');
        enrichUrl.searchParams.set('source', 'livehealthrates.com');

        console.log('Ringba URL:', enrichUrl.toString());

        const ringbaResponse = await fetch(enrichUrl.toString(), {
          method: 'GET',
        });

        const ringbaResponseText = await ringbaResponse.text();
        console.log('Ringba response status:', ringbaResponse.status);
        console.log('Ringba response:', ringbaResponseText);

        if (ringbaResponse.ok) {
          results.ringba.success = true;
        } else {
          results.ringba.error = ringbaResponseText;
          console.error('Ringba API error:', results.ringba.error);
        }
      } catch (error) {
        results.ringba.error = error instanceof Error ? error.message : 'Unknown error';
        console.error('Ringba submission error:', error);
      }
    } else {
      console.log('No phone number provided, skipping Ringba');
    }

    // Submit to Lead Prosper API
    try {
      const leadProsperPayload = {
        // Required Lead Prosper fields
        lp_campaign_id: '32006',
        lp_supplier_id: '101522',
        lp_key: 'doxbk0pxcj2qr',
        lp_action: '', // empty for live, 'test' for testing
        lp_subid1: request.headers.get('referer') || 'homepage',
        lp_subid2: '',
        // Lead data
        first_name: body.firstName || '',
        last_name: body.lastName || '',
        email: body.email || '',
        phone: body.phone?.replace(/\D/g, '') || '',
        address: body.address || '',
        city: body.city || '',
        state: body.state || '',
        zip: body.zipCode || '',
        date_of_birth: body.dob || '',
        household_income: body.householdIncome || '',
        consider_healthy: body.healthStatus || '',
      };

      console.log('Lead Prosper payload:', JSON.stringify(leadProsperPayload));

      const leadProsperResponse = await fetch('https://api.leadprosper.io/direct_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadProsperPayload),
      });

      const responseData = await leadProsperResponse.json();
      console.log('Lead Prosper response:', JSON.stringify(responseData));

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

    console.log('=== LEAD SUBMISSION COMPLETE ===');
    console.log('Results:', JSON.stringify(results));

    return NextResponse.json({
      success: true, // Always return success to not block UX
      message: anySuccess ? 'Lead submitted successfully' : 'Lead received',
      phoneNumber: '833-741-1902',
      results, // Temporarily show results for debugging
    });

  } catch (error) {
    console.error('Error submitting lead:', error);

    // Return success anyway to not break UX
    return NextResponse.json({
      success: true,
      message: 'Lead received',
      phoneNumber: '833-741-1902'
    });
  }
}
