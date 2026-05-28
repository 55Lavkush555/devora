import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String, // markdown content
      required: true,
    },

    imageURL: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    authorEmail: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);