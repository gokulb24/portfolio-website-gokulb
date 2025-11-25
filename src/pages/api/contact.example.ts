// This file should be created if using Next.js serverless contact endpoint
// Rename to contact.ts and update with your email service

import type { NextApiRequest, NextApiResponse } from 'next';

// Example: Using a mail service like SendGrid, Resend, or Nodemailer
// This is a template - configure based on your email provider

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Example with Resend (npm install resend)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL || 'your@email.com',
    //   replyTo: email,
    //   subject: `New contact from ${name}`,
    //   html: `<p>${message}</p>`
    // });

    // Example with Nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   replyTo: email,
    //   subject: `New contact from ${name}`,
    //   text: message,
    // });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
