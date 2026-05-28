import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        connectDB()
        const { slug } = await params;
        const search = decodeURIComponent(slug);

        const blogs = await Blog.find({
            $or: [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    author: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    category: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
        })
            .sort({ createdAt: -1 })
            .limit(12);
        
        return NextResponse.json({ success: true, blogs, totalBlogs: blogs.length })
    }

    catch (err) {
        return NextResponse.json({ success: false, message: err.message })
    }
}