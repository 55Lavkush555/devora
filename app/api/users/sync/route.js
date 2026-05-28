import connectDB from "@/lib/db";
import User from "@/models/User";
import { currentUser } from "@clerk/nextjs/server";

export async function POST() {
    try {
        const clerkUser = await currentUser();

        if (!clerkUser) {
            return new Response("Unauthorized", { status: 401 });
        }

        await connectDB();

        const user = await User.findOne({ clerkId: clerkUser.id });

        if (!user) {
            User.create({
                clerkId: clerkUser.id,
                name: clerkUser.fullName,
                email: clerkUser.emailAddresses[0].emailAddress,
            });
        }

        return Response.json({
            success: true,
            message: "User Synced",
        });
        
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message,
        });
    }
}