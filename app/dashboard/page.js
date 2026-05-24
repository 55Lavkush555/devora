"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import UserArticle from '@/components/user-article'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
    const recentArticles = [
        {
            title: "The Future of React: Server Components Deep Dive",
            author: "Lavkush",
            date: "1 Jan 2023",
            category: "React",
            imageURL: "https://static.vecteezy.com/system/resources/thumbnails/072/929/774/small/a-finger-touches-a-digital-screen-displaying-a-web-development-interface-with-icons-representing-coding-cloud-computing-database-and-website-design-symbolizing-innovation-and-technological-advancement-photo.jpg",
        },
        {
            title: "Mastering Tailwind CSS: Advanced Techniques & Patterns",
            author: "John",
            date: "23 May 2023",
            category: "Frontend",
            imageURL: "https://www.shutterstock.com/image-vector/software-development-coding-backend-engineering-600w-2744417173.jpg",
        },
        {
            title: "Kubernetes in Production: Best Practices & Pitfalls",
            author: "Tim",
            date: "23 May 2023",
            category: "Frontend",
            imageURL: "https://thumbs.dreamstime.com/b/performance-28912532.jpg",
        },
        {
            title: "The Future of React: Server Components Deep Dive",
            author: "Lavkush",
            date: "1 Jan 2023",
            category: "React",
            imageURL: "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
        },
        {
            title: "Mastering Tailwind CSS: Advanced Techniques & Patterns",
            author: "John",
            date: "23 May 2023",
            category: "Frontend",
            imageURL: "https://www.shutterstock.com/image-vector/software-development-coding-backend-engineering-600w-2744417173.jpg",
        },
        {
            title: "Kubernetes in Production: Best Practices & Pitfalls",
            author: "Tim",
            date: "23 May 2023",
            category: "Frontend",
            imageURL: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg",
        },
    ]

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

                        <button className='w-fit text-[18px] px-4 py-2 border border-border cursor-pointer rounded-lg bg-card transition-transform duration-300 hover:-translate-y-0.5 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                            Logout
                        </button>
                    </div>
                </div>
                <div className='w-full h-px bg-border'></div>

                <div className='container mx-auto px-1.5 mt-6'>
                    <Link href={"/dashboard/saved"} className='border border-border p-4 rounded-lg flex flex-col gap-1 items-center justify-center w-52 h-52 bg-card hover:border-[#00cfc4] hover:scale-102 cursor-pointer transition-all duration-300'>
                        <span className='text-lg font-semibold'>📂 Saved Articles</span>
                        <span className='text-sm text-secondaryForeground'>3 articles</span>
                    </Link>
                </div>


                <div className='container mx-auto mt-6 px-1.5'>
                    <h2 className='text-2xl '>Your articles</h2>

                    <div className='articles-container mt-6 flex flex-col gap-3 max-[768px]:flex-row flex-wrap max-[628px]:justify-center'>
                        {
                            recentArticles.map((article, index) => (
                                <UserArticle imageURL={article.imageURL} key={index} title={article.title} date={article.date} uid={"lj43dsa733h6"} />
                            ))
                        }
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default page