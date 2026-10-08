import { NextResponse } from "next/server";
import { getPackageById, getPackageBySlug, updatePackage, deletePackage } from "@/lib/queries/packages";

export async function GET(request, { params }) {
  try {
    const resolvedParams = await params;
    const identifier = resolvedParams.id;

    // Check if UUID or slug
    let pkg = await getPackageById(identifier);
    if (!pkg) {
      pkg = await getPackageBySlug(identifier);
    }

    if (!pkg) {
      return NextResponse.json(
        { success: false, error: "Package not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: pkg });
  } catch (error) {
    console.error("Error in GET /api/packages/[id]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch package." },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const body = await request.json();

    const updated = await updatePackage(id, body);
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Error in PUT /api/packages/[id]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update package." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const deleted = await deletePackage(id);
    return NextResponse.json({ success: true, data: deleted });
  } catch (error) {
    console.error("Error in DELETE /api/packages/[id]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete package." },
      { status: 500 }
    );
  }
}
