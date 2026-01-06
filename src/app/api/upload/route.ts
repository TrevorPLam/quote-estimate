/**
 * Upload stub route noting storage configuration requirements.
 */
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Uploads not configured",
      message: "Configure storage and update /api/upload before enabling photo uploads.",
    },
    { status: 501 },
  );
}
