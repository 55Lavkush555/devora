"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import UserArticle from '@/components/user-article'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SignOutButton } from '@clerk/nextjs'

const page = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("")
    const [totalSaved, setTotalSaved] = useState(null);
    const [totalBlogs, setTotalBlogs] = useState(null);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                let req = await fetch("/api/blogs/userArticles")
                let data = await req.json()

                let reqSaved = await fetch("/api/blogs/get-savedArticles")
                let dataSaved = await reqSaved.json()

                if (data.success) {
                    await data.blogs.forEach(blog => {
                        blog.date = new Date(blog.createdAt).toDateString()
                    })

                    if (dataSaved.success) {
                        setTotalSaved(dataSaved.totalSaved)
                    }

                    setArticles(data.blogs)
                    setTotalBlogs(data.totalBlogs)
                    setTotalPages(data.totalPages)
                    setIsLoading(false)
                }
            }
            catch (err) {
                toast.error(err.message || "An error occurred while fetching the articles.")
            }
        }

        loadArticles()
    }, [])

    const fetchPage = async (pageNumber) => {
        try {
            setIsLoading(true)
            let req = await fetch(`api/blogs/userArticles?page=${pageNumber}`)
            let data = await req.json()

            if (data.success) {
                if (data.success) {
                    await data.blogs.forEach(blog => {
                        blog.date = new Date(blog.createdAt).toDateString()
                    })

                    setArticles(data.blogs)
                    setIsLoading(false)
                }
            }
        }
        catch (err) {
            toast.error(err.message || "An error occurred while fetching the articles.")
        }
    }

    const nextPage = async () => {
        if (page < totalPages) {
            await fetchPage(page + 1)
            setPage(page + 1)
        }
    }

    const previousPage = async () => {
        if (page > 1) {
            await fetchPage(page - 1)
            setPage(page - 1)
        }
    }

    const handleDelete = async (uid) => {
        try {
            let req = await fetch(`/api/blogs/delete/${uid}`)
            setIsLoading(true)
            await fetchPage(page)
            setIsLoading(false)
        }
        catch (err) {
            toast.error(err.message || "An error occurred while deleting the article.")
        }
    }

    return (

        <div>
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <div className='container mx-auto flex justify-between items-center flex-wrap py-10 gap-5 px-1.5'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Dashboard</h1>
                        <p className='text-secondaryForeground'>Manage your blog articles and categories</p>
                    </div>

                    <div className='flex gap-2.5 items-center'>
                        <Link href={"/dashboard/create"}>
                            <button className='w-fit text-[18px] px-4 py-2 bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] cursor-pointer rounded-lg text-white transition-transform duration-300 hover:-translate-y-0.5 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                New Article
                            </button>
                        </Link>

                        <SignOutButton>
                            <button className='w-fit text-[18px] px-4 py-2 border border-border cursor-pointer rounded-lg bg-card transition-transform duration-300 hover:-translate-y-0.5 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                                Logout
                            </button>
                        </SignOutButton>
                    </div>
                </div>
                <div className='w-full h-px bg-border'></div>

                <div className='container mx-auto px-1.5 mt-6'>
                    <Link href={"/dashboard/saved"} className='border border-border p-4 rounded-lg flex flex-col gap-1 items-center justify-center w-52 h-52 bg-card hover:border-[#00cfc4] hover:scale-102 cursor-pointer transition-all duration-300'>
                        <span className='text-lg font-semibold'>📂 Saved Articles</span>
                        <span className='text-sm text-secondaryForeground'>{totalSaved !== null ? totalSaved : 'Loading...'} articles</span>
                    </Link>
                </div>


                <div className='container mx-auto mt-6 px-1.5'>
                    <h2 className='text-2xl'>Your articles</h2>
                    <p className='text-secondaryForeground'>You have {totalBlogs !== null ? totalBlogs : 'Loading...'} articles</p>

                    <div className="search flex gap-2 items-center justify-center mt-4">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="bg-card border-border border-2 rounded-lg text-[18px] px-2 py-1 w-3xs" placeholder="Search" />

                        <Link href={`/search/${encodeURIComponent(search)}`} className="px-3 py-[6px] bg-[#9796ff] rounded-lg text-[18px] cursor-pointer text-white dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className='articles-container mt-6 flex flex-col gap-3 max-[768px]:flex-row flex-wrap max-[628px]:justify-center'>

                        {
                            isLoading
                                ? Array.from({ length: 3 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className='w-full border border-border bg-card rounded-lg flex items-center max-[768px]:flex-col max-[768px]:items-start max-[768px]:w-75 max-[768px]:pb-3 gap-2 overflow-hidden animate-pulse max-[768px]:min-h-98 max-h-50'
                                    >

                                        {/* Image Skeleton */}
                                        <div className='w-75 h-[200px] bg-muted'></div>

                                        <div className='flex flex-col gap-3 w-full px-2 py-2'>

                                            {/* Title Skeleton */}
                                            <div className='space-y-2'>
                                                <div className='h-6 w-[85%] bg-muted rounded'></div>
                                                <div className='h-6 w-[60%] bg-muted rounded'></div>
                                            </div>

                                            {/* Date Skeleton */}
                                            <div className='h-4 w-28 bg-muted rounded'></div>

                                            {/* Buttons Skeleton */}
                                            <div className='flex gap-2 mt-2'>
                                                <div className='h-9 w-20 bg-muted rounded-lg'></div>
                                                <div className='h-9 w-20 bg-muted rounded-lg'></div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                                : (articles.length > 0 ?
                                    articles.map((article, index) => (
                                        <UserArticle
                                            imageURL={article.imageURL}
                                            key={index}
                                            title={article.title}
                                            date={article.date}
                                            uid={article._id}
                                            handleDelete={handleDelete}
                                        />
                                    ))
                                    : <h2 className="text-2xl text-center text-secondaryForeground min-h-[50vh]">You haven't written any articles yet</h2>)
                        }

                    </div>
                </div>

                <div className="w-full flex justify-center items-center mt-6">
                    <div className="flex gap-5 items-center">
                        <button onClick={() => previousPage()} disabled={page === 1} className={`px-3 py-[6px] bg-[#9796ff] rounded-lg text-[18px] cursor-pointer text-white dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}>
                            ◀️
                        </button>

                        <span className="px-3 py-[6px] rounded-lg border border-border">Page {page}</span>

                        <button onClick={() => nextPage()} disabled={!totalPages || page === totalPages} className={`px-3 py-[6px] bg-[#9796ff] rounded-lg text-[18px] cursor-pointer text-white dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}>
                            ▶️
                        </button>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default page