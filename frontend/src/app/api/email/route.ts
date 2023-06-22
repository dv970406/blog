import { sendEmail } from "@/func/api/sendEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const sendInfo = await request.json();

  const response: any = await sendEmail(sendInfo);

  return NextResponse.json({ ok: response.ok });
}
