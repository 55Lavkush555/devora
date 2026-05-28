import connectDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req) {
    try {
        await connectDB();

        const user = await currentUser();

        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 9;
        const skip = (page - 1) * limit;

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized"
                },
                { status: 401 }
            );
        }

        const userData = await User.findOne({
            clerkId: user.id
        }).populate({
            path: "savedArticles",
            select: "-content",
            options: {
                sort: { createdAt: -1 },
                skip: skip,
                limit: limit
            }
        });

        
        const totalSavedData = await User.findOne({
            clerkId: user.id
        });
        
        const totalSaved = totalSavedData.savedArticles.length;
        const totalPages = await Math.ceil(totalSaved / limit);
        

        return NextResponse.json({
            success: true,
            blogs: userData.savedArticles,
            totalSaved,
            totalPages
        });

    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: err.message
            },
            { status: 500 }
        );
    }
}