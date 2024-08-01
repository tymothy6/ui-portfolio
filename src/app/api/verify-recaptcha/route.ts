import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

type RecaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
};

export async function POST(req: NextRequest) {
  try {
    const { captchaValue } = await req.json();

    if (!captchaValue) {
      return NextResponse.json({
        success: false,
        error: "reCAPTCHA response is missing.",
      });
    }

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY}&response=${captchaValue}`,
      },
    );

    const data = (await response.json()) as RecaptchaResponse;

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
