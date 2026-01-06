import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface DoNotSellRequest {
  fullName: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DoNotSellRequest = await request.json();
    const { fullName, email, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email notification to your team
    const { error: sendError } = await resend.emails.send({
      from: 'Live Health Rates <onboarding@resend.dev>',
      to: ['info@livehealthrates.com'], // Change to your team email once domain is verified
      subject: `CCPA Do Not Sell Request - ${fullName}`,
      html: `
        <h2>New "Do Not Sell My Personal Information" Request</h2>
        <p>A user has submitted a CCPA opt-out request. Please process this within 30 days as required by law.</p>

        <h3>User Details:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>

        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>

        <hr>

        <h3>Action Required:</h3>
        <ol>
          <li>Search for this user in Lead Prosper by email: ${email}</li>
          <li>Search for this user in Ringba by email/phone if applicable</li>
          <li>Delete or suppress their data from both platforms</li>
          <li>Send confirmation email to the user</li>
        </ol>

        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `,
    });

    if (sendError) {
      console.error('Resend error:', sendError);
      return NextResponse.json(
        { success: false, error: 'Failed to submit request' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Live Health Rates <onboarding@resend.dev>',
      to: [email],
      subject: 'We Received Your "Do Not Sell" Request - Live Health Rates',
      html: `
        <h2>We Received Your Request</h2>
        <p>Dear ${fullName},</p>

        <p>Thank you for submitting your "Do Not Sell My Personal Information" request to Live Health Rates.</p>

        <p>In accordance with the California Consumer Privacy Act (CCPA), we will process your request within 30 days. You will receive a confirmation email once your request has been completed.</p>

        <p>If you have any questions, please contact us at <a href="mailto:info@livehealthrates.com">info@livehealthrates.com</a>.</p>

        <p>Best regards,<br>Live Health Rates Team</p>

        <hr>
        <p><small>This is an automated message. Please do not reply directly to this email.</small></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted successfully',
    });

  } catch (error) {
    console.error('Error processing do-not-sell request:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred' },
      { status: 500 }
    );
  }
}
