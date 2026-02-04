import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: NextRequest) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json(
        { error: 'Phone number and code are required' },
        { status: 400 }
      );
    }

    // Clean phone number to E.164 format
    const cleaned = phone.replace(/\D/g, '');
    const e164 = cleaned.startsWith('1') ? `+${cleaned}` : `+1${cleaned}`;

    console.log('Verifying code for:', e164);

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({
        to: e164,
        code: code,
      });

    console.log('Verification check status:', verificationCheck.status);

    if (verificationCheck.status === 'approved') {
      return NextResponse.json({
        success: true,
        status: 'approved',
      });
    } else {
      return NextResponse.json({
        success: false,
        status: verificationCheck.status,
        error: 'Invalid code',
      });
    }
  } catch (error) {
    console.error('Twilio verify error:', error);
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    );
  }
}