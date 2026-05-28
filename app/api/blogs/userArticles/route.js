import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export const GET = async (req) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);

        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        const limit = Number(searchParams.get("limit")) || 6;
        const page = Number(searchParams.get("page")) || 1;

        const skip = (page - 1) * limit;

        const blogs = await Blog.find({ authorEmail: user.emailAddresses[0].emailAddress })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .select("-content");
        const totalBlogs = await Blog.countDocuments({ authorEmail: user.emailAddresses[0].emailAddress });
        const totalPages = Math.ceil(totalBlogs / limit);

        return NextResponse.json({ success: true, blogs, totalBlogs, totalPages})
    }
    catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}