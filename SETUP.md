# Portfolio Setup Instructions

## Environment Variables

To enable the contact form, you need to add the following environment variable:

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `xxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your project for changes to take effect

### For Local Development:

Create a `.env.local` file in the root directory and add:

\`\`\`
RESEND_API_KEY=re_aPNiVqx1_GmATwKM6Nvvei1fgLfhn83Jm
\`\`\`

**Note**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

## Contact Form

The contact form uses Resend API to send emails directly to `vikaspathak0911@gmail.com`. Make sure the environment variable is set up before deploying.
