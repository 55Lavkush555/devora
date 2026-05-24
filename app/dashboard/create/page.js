"use client"
import CategorySelect from '@/components/dropdown'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [category, setCategory] = useState("")

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
                            />
                        </div>

                        {/* Cover Image */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-secondaryForeground'>
                                Cover Image URL
                            </label>

                            <div className='flex flex-col md:flex-row gap-3'>
                                <input
                                    type="text"
                                    placeholder='Paste image URL'
                                    className='flex-1 h-12 rounded-xl border border-border bg-card px-4 py-3 outline-none transition-all focus:border-[#7a6eff] focus:ring-2 focus:ring-[#7a6eff]/30'
                                />

                                <button className='h-12 px-5 rounded-xl bg-[#7a6eff] hover:bg-[#6b5cff] transition-colors font-medium text-white'>
                                    📂 Upload
                                </button>
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
                            />
                        </div>

                        {/* Submit Button */}
                        <button className='h-12 rounded-xl bg-gradient-to-r from-[#7a6eff] to-cyan-500 font-semibold hover:opacity-90 transition-opacity text-white'>
                            Publish Article
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default page