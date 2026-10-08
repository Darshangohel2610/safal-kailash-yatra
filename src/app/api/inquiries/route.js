import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validations/inquiry";

export async function POST(request) {
  try {
    const body = await request.json();
    const validationResult = inquirySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid form input data.",
            details: validationResult.error.flatten().fieldErrors,
          },
        },
        { status: 422 }
      );
    }

    const { name, phone, pilgrimsCount, message } = validationResult.data;

    // Forward to Google Sheets Webhook / AppScript if configured
    const inquiryUrl =
      process.env.NEXT_PUBLIC_INQUIRY_API_URL ||
      process.env.VITE_INQUIRY_API_URL;

    if (inquiryUrl) {
      const data = new URLSearchParams();
      data.append("name", name);
      data.append("phone", phone);
      data.append("travellers", String(pilgrimsCount || "2"));
      data.append("message", message || "");

      await fetch(inquiryUrl, {
        method: "POST",
        body: data,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/inquiries:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INQUIRY_SUBMISSION_FAILED",
          message: "Unable to submit your inquiry. Please try again.",
        },
      },
      { status: 500 }
    );
  }
}
