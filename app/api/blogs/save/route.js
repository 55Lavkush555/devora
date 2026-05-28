import connectDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
    try {
        await connectDB()
        const user = await currentUser()

        const data = await req.json()

        if (!user) {
            return NextResponse.json({ success: false, message: "Unauthorized" })
        }

        const userData = await User.findOneAndUpdate(
            { clerkId: user.id },
            {
                $addToSet: {
                    savedArticles: data.blogId
                }
            },
            { new: true }
        );

        return NextResponse.json({ success: true, message:"Article saved successfully!" })
    }
    catch (err) {
        return NextResponse.json({ success: false, message: err.message })
    }
}