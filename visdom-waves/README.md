# visdom-waves
This guide will help you set up and deploy the VisdomWaves website with all integrations.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd visdomwaves-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update the .env.local file with your values (see below)

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables Setup

### 1. Google Analytics 4

**Get Your Measurement ID:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select existing one
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: G-XXXXXXXXXX)

**Add to `.env.local`:**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Resend Email Service

**Get Your API Key:**
1. Sign up at [Resend.com](https://resend.com/)
2. Verify your domain (or use `onboarding@resend.dev` for testing)
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

**Add to `.env.local`:**
```bash
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Configuration
FROM_EMAIL=noreply@yourdomain.com  # Use onboarding@resend.dev for testing
TO_EMAIL=contact@yourdomain.com     # Where contact form submissions go
```

**Important Notes:**
- For production, you must verify your domain in Resend
- For testing, you can use `onboarding@resend.dev` as FROM_EMAIL
- The TO_EMAIL is where you'll receive contact form submissions

### 3. Complete .env.local Example

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Resend Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=noreply@visdomwaves.com
TO_EMAIL=contact@visdomwaves.com
```

## Features

### ✅ Integrated Features

1. **Google Analytics 4**
   - Page view tracking
   - Event tracking
   - Conversion tracking
   - Automatic client-side navigation tracking

2. **Contact Form with Email**
   - Form validation with Zod
   - Email notifications to business
   - Auto-reply to customers
   - Beautiful HTML email templates
   - Success/error messages

3. **SEO Optimization**
   - Meta tags on all pages
   - OpenGraph tags for social sharing
   - Dynamic metadata for products/services
   - Sitemap ready

## Testing Contact Form

### Development Testing
```bash
# 1. Start dev server
npm run dev

# 2. Navigate to http://localhost:3000/contact

# 3. Fill out and submit the form

# 4. Check terminal for email logs (if using test mode)
```

### Production Testing
1. Ensure environment variables are set in your hosting platform
2. Verify domain in Resend
3. Test the live contact form
4. Check email delivery

## Deployment

### Vercel (Recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Set environment variables in Vercel dashboard:
# Settings → Environment Variables
```

### Other Platforms
- Add environment variables in your platform's settings
- Ensure Node.js 18+ is supported
- Build command: `npm run build`
- Start command: `npm start`

## Custom Event Tracking

Track custom events in your code:

```typescript
import { trackEvent } from '@/lib/analytics'

// Track button clicks
trackEvent('click', 'CTA Button', 'Homepage Hero')

// Track form submissions
trackEvent('submit', 'Contact Form', 'Contact Page')

// Track conversions
import { trackConversion } from '@/lib/analytics'
trackConversion('AW-CONVERSION_ID', 1000)
```

## Email Templates

The contact form sends two emails:

1. **Business Notification** - Sent to TO_EMAIL
   - Contains all form details
   - Formatted HTML email
   - Includes timestamp

2. **Customer Auto-Reply** - Sent to customer's email
   - Thank you message
   - Next steps information
   - Link to services

## Troubleshooting

### Contact Form Not Working
- Check RESEND_API_KEY is set correctly
- Verify FROM_EMAIL domain is verified in Resend
- Check browser console for errors
- Check server logs for API errors

### Google Analytics Not Tracking
- Verify NEXT_PUBLIC_GA_MEASUREMENT_ID is set
- Clear browser cache
- Check in Google Analytics Real-Time reports
- Ensure variable starts with `NEXT_PUBLIC_`

### Build Errors
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Check Node.js version: `node --version` (should be 18+)

## Support

For issues or questions:
- Email: contact@visdomwaves.com
- Documentation: Check inline code comments
- Environment Variables: Ensure all are set correctly

## Next Steps

After setup, consider:
1. Adding real team photos to `/public/images/team/`
2. Replacing gradient placeholders with actual images
3. Setting up CMS for blog content (optional)
4. Configuring custom domain
5. Setting up CI/CD pipeline
