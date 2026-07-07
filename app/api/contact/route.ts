import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill out all fields.' }, 
        { status: 400 }
      );
    }
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'kaze0001111@gmail.com',
      subject: `New Portfolio Lead from ${name}`,
      html: `
        <h3>New Message from your Portfolio Site</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Failed to send message.' }, 
      { status: 500 }
    );
  }
}