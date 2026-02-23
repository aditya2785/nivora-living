import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      email: email,
      listIds: [1], // your Brevo list ID
      updateEnabled: true,
    }),
  });

  if (response.ok) {
    return NextResponse.json({ message: "Subscribed successfully" });
  } else {
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}