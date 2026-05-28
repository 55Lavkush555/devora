import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const user = await currentUser();

    await connectDB();

    const body = await req.json();

    const {
      title,
      content,
      imageURL,
      category,
    } = body;

    // validation (simple MVP level)
    if (
      !title ||
      !content ||
      !imageURL ||
      !category
    ) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newBlog = await Blog.create({
      title: title,
      content: content,
      imageURL: imageURL,
      category: category,
      author: user.fullName,
      authorEmail: user.emailAddresses[0].emailAddress,
    });

    return Response.json(
      { message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}