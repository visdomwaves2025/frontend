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
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    const resend = getResendClient();
    if (!resend) {
      console.error('Resend API key not configured');

      // For development/testing: Log the subscription and return success
      console.log(`Newsletter subscription (Email service not configured): ${email}`);

      return NextResponse.json(
        {
          message: 'Thank you for subscribing! (Email service is being configured)',
          warning: 'Email delivery is not yet configured'
        },
        { status: 200 }
      );
    }

    // Send notification to admin
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'contact@visdomwaves.com',
      subject: `New Newsletter Subscription`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #154360 0%, #0073CF 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #0073CF;
            }
            .label {
              font-weight: 600;
              color: #154360;
              margin-bottom: 5px;
            }
            .value {
              color: #555;
              margin-bottom: 15px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #777;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">📧 New Newsletter Subscription</h1>
          </div>
          <div class="content">
            <p>A new subscriber has joined your newsletter!</p>

            <div class="info-box">
              <div class="label">Email Address:</div>
              <div class="value">${email}</div>

              <div class="label">Subscribed At:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>

            <p style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px; font-size: 14px;">
              <strong>💡 Next Steps:</strong><br>
              Add this email to your newsletter distribution list or email marketing platform (Mailchimp, ConvertKit, etc.)
            </p>
          </div>
          <div class="footer">
            <p>This is an automated notification from your VisdomWaves website.</p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to process subscription' },
        { status: 500 }
      );
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to VisdomWaves Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #154360 0%, #0073CF 100%);
              color: white;
              padding: 40px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .logo {
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .content {
              background: #f8f9fa;
              padding: 40px;
              border-radius: 0 0 10px 10px;
            }
            .welcome-box {
              background: white;
              padding: 30px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: center;
            }
            .btn {
              display: inline-block;
              padding: 15px 30px;
              background: linear-gradient(135deg, #0073CF 0%, #8E4585 100%);
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              margin: 20px 0;
            }
            .features {
              display: grid;
              gap: 15px;
              margin: 20px 0;
            }
            .feature {
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #0FBFE4;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #777;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">
              <span style="color: white;">Visdom</span><span style="color: #0FBFE4;">Waves</span>
            </div>
            <p style="margin: 0; font-size: 18px; opacity: 0.95;">Welcome to Our Newsletter!</p>
          </div>
          <div class="content">
            <div class="welcome-box">
              <h2 style="color: #154360; margin-top: 0;">🎉 Thank You for Subscribing!</h2>
              <p style="font-size: 16px; color: #555;">
                We're thrilled to have you join the VisdomWaves community. Get ready to receive:
              </p>
            </div>

            <div class="features">
              <div class="feature">
                <strong>🚀 Latest Insights</strong><br>
                <span style="color: #666; font-size: 14px;">Stay ahead with cutting-edge technology trends and innovations</span>
              </div>
              <div class="feature">
                <strong>💡 Industry Updates</strong><br>
                <span style="color: #666; font-size: 14px;">Expert analysis on AI, digital transformation, and more</span>
              </div>
              <div class="feature">
                <strong>📚 Exclusive Content</strong><br>
                <span style="color: #666; font-size: 14px;">Case studies, whitepapers, and best practices</span>
              </div>
              <div class="feature">
                <strong>🎁 Special Offers</strong><br>
                <span style="color: #666; font-size: 14px;">Early access to webinars, events, and resources</span>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://visdomwaves.com/blog" class="btn">
                Explore Our Blog
              </a>
            </div>

            <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
              Questions or feedback? Reply to this email - we'd love to hear from you!
            </p>
          </div>
          <div class="footer">
            <p>
              <strong>VisdomWaves Innovations</strong><br>
              Hyderabad, Telangana, India<br>
              <a href="https://visdomwaves.com" style="color: #0073CF;">visdomwaves.com</a>
            </p>
            <p style="margin-top: 15px; font-size: 12px;">
              You're receiving this email because you subscribed to our newsletter.<br>
              <a href="#" style="color: #999;">Unsubscribe</a> | <a href="#" style="color: #999;">Update Preferences</a>
            </p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter!',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
