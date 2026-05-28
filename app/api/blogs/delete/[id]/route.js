import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req, { params }) {
    try {
        await connectDB();

        const user = await currentUser();
        const { id } = await params;

        if (!user) {
            return NextResponse.json({ message: "You are not logged in" }, { status: 401 });
        }

        let blog = await Blog.findById(id);

        if (user.emailAddresses[0].emailAddress == blog.authorEmail) {
            blog = await Blog.deleteOne({ _id: id });
            return NextResponse.json({ success: true, blog });
        }
        else {
            return NextResponse.json({ message: "You are not authorized" }, { status: 403 });
        }


    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}