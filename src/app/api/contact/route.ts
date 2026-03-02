import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
  callback?: boolean;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Fresh4You Website" <${process.env.SMTP_USER}>`,
      to: "info@freshforyou.de",
      replyTo: body.email,
      subject: `Neue Kontaktanfrage von ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `E-Mail: ${body.email}`,
        body.phone ? `Telefon: ${body.phone}` : null,
        `Rückruf gewünscht: ${body.callback ? "Ja" : "Nein"}`,
        "",
        "Nachricht:",
        body.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${escapeHtml(body.name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">E-Mail:</td><td style="padding:8px;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
          ${body.phone ? `<tr><td style="padding:8px;font-weight:bold;">Telefon:</td><td style="padding:8px;">${escapeHtml(body.phone)}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;">Rückruf:</td><td style="padding:8px;">${body.callback ? "Ja" : "Nein"}</td></tr>
        </table>
        <h3 style="margin-top:20px;">Nachricht:</h3>
        <p style="white-space:pre-wrap;">${escapeHtml(body.message)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
