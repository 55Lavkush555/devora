"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import ArticleCard from "@/components/article-card";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  const [recentArticles, setRecentArticles] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadBlogs = async () => {
      let req = await fetch('/api/blogs/latest')
      let data = await req.json()

      if (data.success) {
        await data.blogs.forEach(blog => {
          blog.date = new Date(blog.createdAt).toDateString();
        })

        setRecentArticles(data.blogs)
        setIsLoading(false)
      }
    }

    loadBlogs()
  }, [])


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
        className="h-[calc(100vh-44px)] flex flex-col justify-center gap-5 items-center"
      >

        <h1 className="text-5xl h-14 font-bold bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] bg-clip-text text-transparent max-[568px]:text-4xl max-[568px]:h-11 max-[426px]:text-[29px] max-[343px]:text-[27px]">Insights into the Future</h1>

        <h1 className="text-5xl font-bold max-[568px]:text-4xl max-[568px]:h-auto max-[426px]:text-[29px] max-[343px]:text-[27px]">of Technology</h1>

        <p className="text-center text-secondaryForeground">Discover in-depth articles about web development, design, AI, and technology trends from industry experts.</p>

        <div className="flex flex-wrap gap-3 items-center justify-center">

          <Link href={'/blogs'}><button className="w-fit text-[18px] px-4 py-2 bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] cursor-pointer rounded-lg text-white transition-transform duration-300 hover:scale-102">Explore articles</button></Link>

          <Link href={'/#categories'}><button className="w-fit text-[18px] px-4 py-2 cursor-pointer rounded-lg border-[1px] border-[#eee5e7] dark:border-[#20212b] transition-transform duration-300 hover:scale-102 hover:bg-[#e0f4f1] dark:hover:bg-[#041a1a]">Browse categories</button></Link>

        </div>
      </motion.div>

      <div className="bg-secondaryLight dark:bg-secondaryDark py-10" id="categories">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="featured-articles container mx-auto bg-secondaryLight dark:bg-secondaryDark text-center"
        >

          <h1 className="text-3xl font-medium">Explore Categories</h1>
          <p className="text-secondaryForeground">Find content in your areas of interest</p>

          <div className="categories-container flex flex-wrap justify-center gap-6 mt-5 text-start">
            <CategoryCard category={"Frontend"} description={"Learn HTML, CSS, Tailwind CSS, responsive design, animations, and modern frontend development techniques."} iconColor={0} />

            <CategoryCard category={"Backend"} description={"Build powerful backend systems with APIs, databases, authentication, and server-side development."} iconColor={1} />

            <CategoryCard category={"Python"} description={"Learn Python programming for automation, scripting, backend development, and real-world applications."} iconColor={2} />

            <CategoryCard category={"AI"} description={"Explore artificial intelligence, machine learning, AI tools, and modern AI-powered workflows."} iconColor={3} />

            <CategoryCard category={"DevOps"} description={"Understand deployment, CI/CD, Docker, cloud platforms, monitoring, and scalable infrastructure."} iconColor={4} />

            <CategoryCard category={"Other"} description={"Discover programming tips, developer tools, productivity hacks, and various tech-related topics."} iconColor={5} />
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="text-center container mx-auto my-10"
      >
        <h1 className="text-3xl font-medium">Recent Articles</h1>
        <p className="text-secondaryForeground">Latest from our community</p>

        <div className="articles-container mt-10 flex flex-wrap justify-center gap-5">

          {
            isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="relative w-76 bg-card rounded-2xl overflow-hidden min-h-[355px] border-[1px] border-border text-start flex flex-col gap-3 animate-pulse"
                >

                  {/* Category Skeleton */}
                  <div className="absolute top-2 left-2 h-7 w-24 rounded-2xl bg-muted"></div>

                  {/* Image Skeleton */}
                  <div className="h-[200px] w-full bg-muted"></div>

                  {/* Title Skeleton */}
                  <div className="px-3 mt-1 space-y-2">
                    <div className="h-5 w-[90%] rounded bg-muted"></div>
                    <div className="h-5 w-[70%] rounded bg-muted"></div>
                  </div>

                  {/* Author + Date Skeleton */}
                  <div className="px-3 mt-auto mb-3 space-y-2">
                    <div className="h-4 w-28 rounded bg-muted"></div>
                    <div className="h-3 w-20 rounded bg-muted"></div>
                  </div>

                </div>
              ))
              : recentArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                  category={article.category}
                  imageURL={article.imageURL}
                  uid={article._id}
                />
              ))
          }

        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
