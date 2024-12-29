import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { emailSchema } from '@/components/contact/zodSchema';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.NEXT_EMAIL_KEY);

  const body = await req.json();

  const info = emailSchema.safeParse(body);

  if (!info.success) return NextResponse.json({ error: info });

  const { email, subject, message } = info.data;

  const emailMessage = [`From: ${email}`, message].join('\n\n');

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'codinister@gmail.com',
    subject,
    html: `<p>${emailMessage}</p>`,
  });

  return NextResponse.json({ success: true });
}
