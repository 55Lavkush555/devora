"use client"
import CategorySelect from '@/components/dropdown'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'sonner'

const LoadingSkeleton = () => {
    return (
        <div>
            {/* Header */}
            <div className='w-full max-w-237.5 mx-auto py-10 gap-5 px-1.5'>
                <div className='flex flex-col gap-3 animate-pulse'>

                    <div className='h-6 w-40 rounded-lg bg-secondaryLight dark:bg-secondaryDark'></div>

                    <div className='h-10 w-72 rounded-xl bg-secondaryLight dark:bg-secondaryDark'></div>

                </div>
            </div>

            <div className='w-full h-px bg-border'></div>

            {/* Form Skeleton */}
            <div className='w-full max-w-237.5 mx-auto py-10 px-1.5'>
                <div className='rounded-3xl border border-border p-6 md:p-8 flex flex-col gap-6 bg-secondaryLight dark:bg-secondaryDark animate-pulse'>

                    {/* Title */}
                    <div className='flex flex-col gap-3'>
                        <div className='h-4 w-20 rounded bg-card'></div>

                        <div className='h-12 rounded-xl bg-card'></div>
                    </div>

                    {/* Cover Image */}
                    <div className='flex flex-col gap-3'>
                        <div className='h-4 w-36 rounded bg-card'></div>

                        <div className='flex flex-col md:flex-row gap-3'>
                            <div className='flex-1 h-12 rounded-xl bg-card'></div>

                            <div className='w-32 h-12 rounded-xl bg-card'></div>
                        </div>
                    </div>

                    {/* Category */}
                    <div className='flex flex-col gap-3'>
                        <div className='h-4 w-24 rounded bg-card'></div>

                        <div className='h-12 rounded-xl bg-card'></div>
                    </div>

                    {/* Markdown */}
                    <div className='flex flex-col gap-3'>
                        <div className='h-4 w-24 rounded bg-card'></div>

                        <div className='h-64 rounded-2xl bg-card'></div>
                    </div>

                    {/* Button */}
                    <div className='h-12 rounded-xl bg-card'></div>
                </div>
            </div>
        </div>
    );
}



const page = ({ params }) => {
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imageURL, setImageURL] = useState("")
    const inputRef = useRef();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            const { slug } = await params
            const req = await fetch(`/api/blogs/${slug}`)

            const data = await req.json()

            setTitle(data.blog.title)
            setContent(data.blog.content)
            setImageURL(data.blog.imageURL)
            setCategory(data.blog.category)

            setLoading(false)
        }

        fetchBlog()
    }, [])


    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        return data.imageUrl;
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];

        const url = await uploadImage(file);

        setImageURL(url);
        inputRef.current.readOnly = true;
    };

    const handleSubmit = async () => {
        try {
            const { slug } = await params;

            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "_id": slug,
                "title": title,
                "content": content,
                "imageURL": imageURL,
                "category": category,
            });

            try {
                let response = await fetch("/api/blogs/edit", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let data = await response.text();

                if (!response.ok){
                    throw new Error(data)
                }

                toast.success("Blog Updated Successfully");

            } catch (error) {
                toast.error(error.message || "An error occurred while updating the article.");
            }

        } catch (error) {
            toast.error(error.message || "An error occurred.");
        }
    }

    if (loading) return (
        <div>
            <Navbar />
            <LoadingSkeleton />
            <Footer />
        </div>
    )

    return (
        <div>
            <Navbar />

            <div>
                <div className='w-full max-w-237.5 mx-auto py-10 gap-5 px-1.5'>
                    <div className='flex flex-col gap-2'>
                        <Link href={"/dashboard"} className='text-[#7a6eff] text-lg hover:translate-x-1 transition-transform duration-300 w-fit'>⬅️ Back to Dashboard</Link>
                        <h1 className='text-3xl font-semibold'>Create New Article</h1>
                    </div>
                </div>
                <div className='w-full h-px bg-border'></div>

                <div className='w-full max-w-237.5 mx-auto py-10 px-1.5'>
                    <div className='rounded-3xl border border-border p-6 md:p-8 flex flex-col gap-6 bg-secondaryLight dark:bg-secondaryDark'>

                        {/* Title */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-secondaryForeground'>
                                Title
                            </label>

                            <input
                                type="text"
                                placeholder='Enter article title'
                                className='h-12 rounded-xl border border-border bg-card px-4 outline-none transition-all focus:border-[#7a6eff] focus:ring-2 focus:ring-[#7a6eff]/30'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        {/* Cover Image */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-secondaryForeground'>
                                Cover Image URL
                            </label>

                            <div className='flex flex-col md:flex-row gap-3'>
                                <input
                                    type="url"
                                    placeholder='Paste image URL'
                                    className='flex-1 h-12 rounded-xl border border-border bg-card px-4 py-3 outline-none transition-all focus:border-[#7a6eff] focus:ring-2 focus:ring-[#7a6eff]/30'
                                    value={imageURL}
                                    onChange={(e) => setImageURL(e.target.value)}
                                    ref={inputRef}
                                />

                                <div>
                                    <input
                                        id="imageUpload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="hidden"
                                    />

                                    <label
                                        htmlFor="imageUpload"
                                        className="flex items-center justify-center h-12 px-5 bg-[#7a6eff] hover:bg-[#6b5cff] rounded-xl text-white font-medium cursor-pointer leading-none"
                                    >
                                        📂 Upload
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Category */}
                        <CategorySelect
                            setCategory={setCategory}
                            category={category}
                        />

                        {/* Markdown */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-secondaryForeground'>
                                Content
                            </label>

                            <textarea
                                placeholder='Write your markdown content here...'
                                rows={12}
                                className='rounded-2xl border border-border bg-card p-4 outline-none resize-none transition-all focus:border-[#7a6eff] focus:ring-2 focus:ring-[#7a6eff]/30'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <button onClick={() => handleSubmit()} className='h-12 rounded-xl bg-gradient-to-r from-[#7a6eff] to-cyan-500 font-semibold hover:opacity-90 transition-opacity text-white'>
                            Update Article
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default page