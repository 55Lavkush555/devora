"use client";

import Navbar from "@/components/Navbar";
import React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import ArticleCard from "@/components/article-card";
import Footer from "@/components/Footer";

const page = () => {
    const [recentArticles, setRecentArticles] = useState([
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
    ])

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
                className="h-[50vh] flex justify-center items-center flex-col gap-3.5 bg-secondaryLight dark:bg-secondaryDark"
            >
                <h1 className="text-5xl font-bold">All Articles</h1>
                <p className="text-secondaryForeground">Browse our complete collection</p>
            </motion.div>
            <div className="h-px bg-border w-full "></div>

            <motion.div
                className="mt-3 container mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
            >
                <div className="search flex gap-2 items-center justify-center">
                    <input type="text" className="bg-card border-border border-2 rounded-lg text-[18px] px-2 py-1 w-3xs" placeholder="Search" />
                    <button className="px-3 py-[6px] bg-[#9796ff] rounded-lg text-[18px] cursor-pointer text-white dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300">
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
                    </button>
                </div>

                <div className="articles-container w-[95%] mx-auto mt-10 flex flex-wrap justify-center gap-5">

                    {
                        recentArticles.map((article, index) => (
                            <ArticleCard key={index} title={article.title} author={article.author} date={article.date} category={article.category} imageURL={article.imageURL} uid={"12h3hc3xaadf3"} />
                        ))
                    }
                </div>

            </motion.div>

            <Footer />
        </div>
    )
}

export default page