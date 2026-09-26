/* eslint-disable */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FROM_ADDRESS = process.env.SMTP_USER || 'legal@repukeel.com';
const ADMIN_EMAIL  = 'legal@repukeel.com';

function makeTransport() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  // Diagnostic log — visible in Vercel Function Logs
  console.log('[notify] SMTP config:', {
    host: smtpHost,
    port: smtpPort,
    user: smtpUser ? smtpUser : 'MISSING',
    pass: smtpPass ? '***SET***' : 'MISSING',
  });

  if (!smtpPass) {
    throw new Error('SMTP_PASS environment variable is not set. Please configure it in Vercel Environment Variables.');
  }

  return nodemailer.createTransport({
    host:   smtpHost,
    port:   smtpPort,
    secure: true,
    auth: {
      user: smtpUser || 'legal@repukeel.com',
      pass: smtpPass,
    },
  });
}

/**
 * POST /api/notify
 * Body: { type: 'new_signup' | 'new_case' | 'reset_password', ...fields }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type } = body;
    const transporter = makeTransport();

    if (type === 'new_signup') {
      const { name, email, phone } = body;

      // Notify admin
      await transporter.sendMail({
        from: FROM_ADDRESS,
        to:   ADMIN_EMAIL,
        subject: `New Client Signup — ${name}`,
        html: `
          <h2>New client registered on RepuKeel</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone / WhatsApp:</b> ${phone || 'Not provided'}</p>
          <p>View in admin: <a href="https://repukeel.com/dashboard/admin/clients">Clients Directory</a></p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    if (type === 'new_case') {
      const { clientName, clientEmail, caseId, serviceType, contactPreference } = body;

      // Notify admin
      await transporter.sendMail({
        from: FROM_ADDRESS,
        to:   ADMIN_EMAIL,
        replyTo: clientEmail,
        subject: `New Case Submitted — ${caseId}`,
        html: `
          <h2>A new case has been submitted</h2>
          <p><b>Case ID:</b> ${caseId}</p>
          <p><b>Client:</b> ${clientName} (${clientEmail})</p>
          <p><b>Service:</b> ${serviceType}</p>
          <p><b>Preferred Contact:</b> ${contactPreference || 'Not specified'}</p>
          <p>View in admin: <a href="https://repukeel.com/dashboard/admin/cases">Admin Cases</a></p>
        `,
      });

      // Confirm to client
      await transporter.sendMail({
        from: FROM_ADDRESS,
        to:   clientEmail,
        subject: `Your RepuKeel Case ${caseId} Has Been Received`,
        html: `
          <p>Dear ${clientName},</p>
          <p>Thank you for submitting your case to RepuKeel. We have received your inquiry and will be in touch shortly.</p>
          <p><b>Case ID:</b> ${caseId}<br/><b>Service:</b> ${serviceType}</p>
          <p>You can track your case at any time by visiting your <a href="https://repukeel.com/dashboard">client dashboard</a>.</p>
          <p>Best regards,<br/>RepuKeel Legal Team</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    if (type === 'reset_password') {
      const { email, resetLink } = body;

      await transporter.sendMail({
        from: FROM_ADDRESS,
        to:   email,
        subject: 'Reset Your RepuKeel Password',
        html: `
          <p>You requested a password reset for your RepuKeel account.</p>
          <p><a href="${resetLink}" style="background:#d4af37;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block;">Reset Password</a></p>
          <p>This link expires in 1 hour. If you did not request a reset, you can safely ignore this email.</p>
          <p>RepuKeel Legal Team</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    if (type === 'contact_form') {
      const { firstName, lastName, email, reason, message } = body;

      await transporter.sendMail({
        from: FROM_ADDRESS,
        to:   ADMIN_EMAIL,
        replyTo: email,
        subject: `New Contact Form Message — ${reason}`,
        html: `
          <h2>New Message from Contact Page</h2>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Reason for Inquiry:</b> ${reason}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unknown notification type' }, { status: 400 });

  } catch (err: any) {
    console.error('[notify API error]', err);
    // Don't block the user — return success even if email fails
    // so the main action (signup/case create) still proceeds
    return NextResponse.json({ success: true, warning: 'Email delivery failed', detail: err?.message });
  }
}
