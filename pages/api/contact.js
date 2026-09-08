import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@sigmamachines.net",
      replyTo: email,
      subject: `New Contact Message from ${name || "Website Visitor"}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
}