# Email Setup Guide

This guide will help you configure email sending for the contact form.

## Prerequisites

- A Gmail account (cyporteveryday@gmail.com)
- 2-Step Verification enabled on your Google account

## Setup Steps

### 1. Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on **2-Step Verification** (if not already enabled)
3. Follow the prompts to enable it

### 2. Generate App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords
2. In the "Select app" dropdown, choose **Mail**
3. In the "Select device" dropdown, choose **Other (Custom name)**
4. Enter a name like "My Blog Contact Form"
5. Click **Generate**
6. Google will display a 16-character password (like: `xxxx xxxx xxxx xxxx`)
7. **Copy this password** (you won't be able to see it again)

### 3. Configure Environment Variables

Create a file named `.env.local` in the root of your project:

```bash
# Email Configuration
EMAIL_USER=cysporteveryday@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
```

**Important:** 
- Replace `your_16_character_app_password_here` with the App Password you generated
- Remove any spaces from the App Password
- **NEVER commit `.env.local` to Git** (it's already in .gitignore)

### 4. Restart Development Server

After creating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
yarn dev
```

## Testing

1. Go to your contact page: `http://localhost:3000/contact`
2. Fill out the form
3. Click "Send Message"
4. Check your inbox at cyporteveryday@gmail.com

## Email Format

When someone submits the contact form, you'll receive an email with:
- **Subject:** "New Contact Form Message from [Name]"
- **From:** cysporteveryday@gmail.com
- **Reply-To:** The sender's email address (so you can reply directly)
- **Content:** Name, Email, and Message in a formatted HTML layout

## Troubleshooting

### "Failed to send email" error

1. **Check your App Password:** Make sure you're using the App Password, not your regular Gmail password
2. **Check environment variables:** Ensure `.env.local` exists and has correct values
3. **Restart server:** After adding/modifying `.env.local`, restart the dev server
4. **Check Google Security:** Sometimes Google may block the login attempt. Check your email for security alerts

### "Authentication failed" error

- Make sure 2-Step Verification is enabled
- Regenerate a new App Password if needed
- Ensure there are no spaces in the App Password

### Email not arriving

- Check your spam folder
- Verify EMAIL_USER is set to the correct email
- Check the console for error messages

## Alternative Email Services

If you prefer to use a different email service:

### SendGrid (Recommended for production)

```typescript
// In app/api/contact/route.ts
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

### AWS SES

```typescript
const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 587,
  auth: {
    user: process.env.AWS_SES_USER,
    pass: process.env.AWS_SES_PASSWORD,
  },
});
```

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - do NOT commit it
- ✅ Use App Passwords, never your real Gmail password
- ✅ The API route validates all input fields
- ✅ Email addresses are not exposed to the client

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard:
   - `EMAIL_USER=cyporteveryday@gmail.com`
   - `EMAIL_PASSWORD=your_app_password`

2. For Vercel:
   - Go to Project Settings → Environment Variables
   - Add both variables
   - Redeploy

3. For other platforms, consult their documentation on environment variables

