import connectDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
    try{
        await connectDB()

        const user = await currentUser()
        const data = await req.json()

        if (!user) {
            return NextResponse.json({ success: false, message: "Unauthorized" })
        }

        const userData = await User.findOne({ clerkId: user.id});

        const isSaved = userData.savedArticles.includes(data.blogId)

        return NextResponse.json({ success: true, isSaved })
    }
    catch (err) {
        return NextResponse.json({ success: false, message: err.message })
    }
}