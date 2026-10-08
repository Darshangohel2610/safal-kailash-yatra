import { NextResponse } from "next/server";
import { getPackages, createPackage } from "@/lib/queries/packages";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured") === "true";
    const search = searchParams.get("search");
    const includeAll = searchParams.get("admin") === "true";

    const data = await getPackages({ category, featured, search, includeAll });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in GET /api/packages:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch packages." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.title || !body.startingPrice) {
      return NextResponse.json(
        { success: false, error: "Title and Starting Price are required." },
        { status: 400 }
      );
    }

    const created = await createPackage(body);
    return NextResponse.json({ success: true, data: created }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/packages:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create package." },
      { status: 500 }
    );
  }
}
