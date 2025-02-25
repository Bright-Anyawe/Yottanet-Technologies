import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse incoming JSON from the request body
    const { email, location, mobile, quantity, totalCost, productId } = await request.json();

    // 2. Create a transporter using your email service credentials.
    //    For example, using Gmail SMTP (you'll replace with your real credentials).
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // e.g. "myaccount@gmail.com"
        pass: process.env.GMAIL_PASS, // e.g. "my-gmail-password-or-app-pass"
      },
    });

    // 3. Craft the email message
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "anyawe.work@gmail.com", // The seller/owner’s email
      subject: "New Order Received",
      text: `
        A new order was placed:

        Product ID: ${productId}
        Quantity: ${quantity}
        Total Cost: $${totalCost}

        Customer Info:
        Email: ${email}
        Location: ${location}
        Mobile: ${mobile}
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    // 5. Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
