import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    const resend = getResendClient();
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'contact@visdomwaves.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #154360 0%, #0073CF 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
              }
              .label {
                font-weight: bold;
                color: #154360;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #154360;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${firstName} ${lastName}</span>
                </div>

                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>

                ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                ` : ''}

                ${company ? `
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                ` : ''}

                ${service ? `
                <div class="field">
                  <span class="label">Service Interest:</span>
                  <span class="value">${service}</span>
                </div>
                ` : ''}

                <div class="field" style="border-bottom: none;">
                  <span class="label">Message:</span>
                  <p class="value" style="white-space: pre-wrap;">${message}</p>
                </div>

                <div class="footer">
                  <p>This email was sent from the VisdomWaves contact form</p>
                  <p>Received at: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to the user
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for contacting VisdomWaves',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #154360 0%, #0073CF 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: white;
                padding: 40px 30px;
                border: 1px solid #e0e0e0;
                border-radius: 0 0 8px 8px;
              }
              .btn {
                display: inline-block;
                padding: 12px 30px;
                background: #0073CF;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <p>Hi ${firstName},</p>

                <p>Thank you for contacting VisdomWaves Innovations. We've received your message and our team will review it shortly.</p>

                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our team will review your inquiry within 24 hours</li>
                  <li>A specialist will reach out to discuss your needs</li>
                  <li>We'll schedule a consultation if needed</li>
                </ul>

                <p>In the meantime, feel free to explore our solutions:</p>

                <a href="https://visdomwaves.com/services" class="btn" style="color: white;">View Our Services</a>

                <p style="margin-top: 30px;">Best regards,<br>
                <strong>The VisdomWaves Team</strong></p>

                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">

                <p style="font-size: 12px; color: #666;">
                  VisdomWaves Innovations<br>
                  AI-Driven Solutions & Digital Transformation<br>
                  <a href="mailto:contact@visdomwaves.com">contact@visdomwaves.com</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
