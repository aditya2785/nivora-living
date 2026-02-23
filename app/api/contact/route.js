import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Nivora Living Website",
          email: "nivoraliving@gmail.com", // must be verified in Brevo
        },
        to: [
          {
            email: "nivoraliving@gmail.com",
            name: "Nivora Living",
          },
        ],
        subject: "New Contact Form Submission",
        htmlContent: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to send message" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully" });

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}