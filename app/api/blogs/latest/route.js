import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
        return NextResponse.json({ success: true, blogs });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}