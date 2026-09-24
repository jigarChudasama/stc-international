import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, email, country, category, message } = body;

    // Validate inputs basic
    if (!name || !company || !email || !country || !category || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure GoDaddy SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtpout.secureserver.net",
      port: process.env.SMTP_PORT || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your GoDaddy email
        pass: process.env.SMTP_PASS, // Your GoDaddy email password
      },
    });

    const mailOptions = {
      from: `"${name} (via Website)" <${process.env.SMTP_USER}>`, // Shows user's name but sends from your authenticated SMTP to avoid spam blocks
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Your STC receiving email
      replyTo: email, // When you click 'reply', it will reply to the user's email directly
      subject: `New Inquiry from ${name} at ${company}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #faf7f2; padding: 40px 20px; color: #2b2b29;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d4c8b0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #09284c; padding: 24px; text-align: center;">
              <h2 style="color: #faf7f2; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">New Inquiry Received</h2>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ebe4d6;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 4px;">Name</div>
                    <div style="font-size: 16px; color: #2b2b29;">${name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ebe4d6;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 4px;">Company</div>
                    <div style="font-size: 16px; color: #2b2b29;">${company}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ebe4d6;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 4px;">Email</div>
                    <div style="font-size: 16px; color: #2b2b29;"><a href="mailto:${email}" style="color: #09284c; text-decoration: none;">${email}</a></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ebe4d6;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 4px;">Country</div>
                    <div style="font-size: 16px; color: #2b2b29;">${country}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ebe4d6;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                    <div style="font-size: 16px; color: #2b2b29;">${category}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 0 0 0;">
                    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #caa96e; letter-spacing: 1px; margin-bottom: 8px;">Message</div>
                    <div style="font-size: 15px; color: #6b6860; line-height: 1.6; background-color: #faf7f2; padding: 16px; border-radius: 6px;">
                      ${message.replace(/\n/g, "<br/>")}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div style="background-color: #f5efe0; padding: 16px; text-align: center; font-size: 12px; color: #6b6860;">
              This email was sent from the contact form on STC International.
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
