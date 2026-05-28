import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

// GET /api/blogs/:id
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}