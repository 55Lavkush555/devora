import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        const user = await currentUser();

        const {
            _id,
            title,
            content,
            imageURL,
            category,
        } = body;

        // validation (simple MVP level)
        if (!user) {
            return NextResponse.json(
                { message: "You are not logged in" },
                { status: 401 }
            );
        }

        let blog = await Blog.findById(_id);


        if (user.emailAddresses[0].emailAddress == blog.authorEmail) {

            
            if (
                !_id ||
                !title ||
                !content ||
                !imageURL ||
                !category
            ) {
                return NextResponse.json(
                    { message: "All fields are required" },
                    { status: 400 }
                );
            }
            
            await Blog.findByIdAndUpdate(_id, {
                title,
                content,
                imageURL,
                category,
            });         
        }
        else {
            return NextResponse.json(
                { message: "You are not authorized to edit this blog" },
                { status: 401 }
            );
        }

        blog = await Blog.findById(_id);
        
        return NextResponse.json({ success: true, blog: blog });
    }
    catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}