import type { NextApiRequest, NextApiResponse } from 'next';

// Minimal API endpoint to receive contact form submissions during development.
// This endpoint currently logs the submission and returns success. To actually
// send emails, wire this handler to an email provider (SendGrid, Resend,
// Nodemailer, etc.) and add the provider credentials to environment variables.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // For now, just log the submission server-side so you can see it in logs.
    // When deploying, replace this with real email/send logic.
    console.log('[contact] New submission:', { name, email, message });

    // Respond with success so the client shows confirmation.
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}
