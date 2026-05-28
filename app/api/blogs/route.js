import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get('page')) || 1;
        const limit = Number(searchParams.get('limit')) || 12;

        const skip = (page - 1) * limit;

        // Total blogs count
        const totalBlogs = await Blog.countDocuments();

        // Fetch blogs
        const blogs = await Blog.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .select("-content");

        // Total pages
        const totalPages = Math.ceil(totalBlogs / limit);

        return NextResponse.json({
            success: true,
            blogs,
            currentPage: page,
            totalPages,
            totalBlogs,
            hasMore: page < totalPages,
        });

    }
    catch (error) {
        return NextResponse.json({ success: false, error: error.message })
    }
}