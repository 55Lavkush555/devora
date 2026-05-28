"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { toast } from "sonner"
import Link from 'next/link';

// 👇 Skeleton Component — Tera layout dekh ke banaya
const BlogSkeleton = () => {
    return (
        <div className='container mx-auto px-1.5 animate-pulse'>
            {/* Image Skeleton */}
            <div className='w-full h-100 bg-gray-300 dark:bg-gray-700 mt-5 rounded-2xl'></div>

            <div className='mt-7 w-4/5 mx-auto max-[1024px]:w-full'>
                <div className='relative'>
                    {/* Category Badge */}
                    <div className='w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-2xl'></div>

                    {/* Title */}
                    <div className='w-3/4 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg mt-3'></div>
                    <div className='w-1/2 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg mt-2'></div>

                    {/* Author */}
                    <div className='w-40 h-5 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4 ml-2'></div>
                    {/* Date */}
                    <div className='w-28 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg mt-2 ml-2'></div>

                    <div className="h-px bg-border w-full mt-3"></div>
                </div>

                {/* Content Lines */}
                <div className='mt-7 space-y-3 w-[95%] mx-auto'>
                    <div className='w-full h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-full h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-full h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-4/6 h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-full h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                </div>
            </div>
        </div>
    )
}

const page = () => {
    const { blogID } = useParams();
    const [blog, setBlog] = useState(null); // 👈 null rakho — pehle se data mat bharoo
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                let req = await fetch(`/api/blogs/${blogID}`);
                let data = await req.json();

                if (data.success) {
                    data.blog.date = new Date(data.blog.createdAt).toDateString();
                    setBlog(data.blog);
                }

                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "User",
                    "Content-Type": "application/json"
                }

                let bodyContent = JSON.stringify({
                    blogId: blogID
                });

                let response = await fetch("/api/blogs/is-saved", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let isSave = await response.json();

                if (isSave.success) {
                    setIsSaved(isSave.isSaved)
                }


            } catch (err) {
                toast.error(err.message || "An error occurred while fetching the blog.")
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, []);

    const handleSave = async () => {
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "User",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                blogId: blogID
            });

            let req = await fetch("/api/blogs/save", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await req.json()

            if (!data.success) {
                toast.error(data.message || "Failed to save the articles.")
                return;
            }

            toast.success("Article saved successfully!");
            setIsSaved(true)
        }
        catch (err) {
            toast.error(err.message || "An error occurred while saving the article.")
        }
    }

    const handleRemoveSaved = async () => {
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "User",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                blogId: blogID
            });

            let response = await fetch("/api/blogs/remove-saved", {
                method: "DELETE",
                body: bodyContent,
                headers: headersList
            });

            toast.success("Article removed from saved list");
            setIsSaved(false)
        }
        catch (err) {
            toast.error(err.message || "An error occurred while removing the article from saved list.")
        }
    }

    // 👇 Jab tak fetch nahi hua
    if (loading) return (
        <div>
            <Navbar />
            <BlogSkeleton />
            <Footer />
        </div>
    );

    // 👇 Agar blog mila hi nahi
    if (!blog) return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />

            <div className='flex-1 container mx-auto px-1.5 flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>
                    Blog not found!
                </h1>
            </div>

            <Footer />
        </div>
    );

    return (
        <div>
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='container mx-auto px-1.5'
            >

                <div className='w-full mx-auto mt-5 gap-5 px-1.5'>
                    <div className='flex flex-col gap-2'>
                        <Link href={"/blogs"} className='text-[#7a6eff] text-lg hover:translate-x-1 transition-transform duration-300 w-fit'>⬅️ Back to Blogs</Link>
                    </div>
                </div>

                {/* 👇 Image URL fix — agar imageURL nahi hai toh fallback image */}
                <Image
                    src={blog.imageURL || "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"}
                    alt='Article image'
                    width={500}
                    height={500}
                    className='w-full h-100 object-cover mt-5 rounded-2xl'
                />

                <div className='mt-7 w-4/5 mx-auto max-[1024px]:w-full'>
                    <div className='relative'>
                        <span className='rounded-2xl p-1 px-3 text-[14px] bg-gradient-to-r from-purple-500 to-blue-500 text-white'>
                            {blog.category}
                        </span>
                        <h1 className='text-5xl font-bold mt-2 max-[550px]:text-4xl'>{blog.title}</h1>
                        <h3 className='text-[22px] font-bold mt-3 ml-2'>{blog.author}</h3>
                        <i className='text-[16px] text-secondaryForeground ml-2'>{blog.date}</i>
                        <div className="h-px bg-border w-full mt-2"></div>

                        {isSaved ? (
                            <button onClick={handleRemoveSaved} className='absolute bottom-3 right-3 p-1 bg-[#9796ff] rounded-lg text-lg text-white cursor-pointer dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300 font-semibold'>
                                ❌ Unsave
                            </button>
                        ) : (
                            <button onClick={handleSave} className='absolute bottom-3 right-3 p-1 bg-[#9796ff] rounded-lg text-lg text-white cursor-pointer dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300 font-semibold'>
                                💾 Save
                            </button>
                        )}
                    </div>

                    <div className='mt-7 prose dark:prose-invert max-w-none w-[95%] mx-auto'>
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default page;