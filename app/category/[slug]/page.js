"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ArticleCard from '@/components/article-card'
import Link from 'next/link'


const page = () => {
  const { slug } = useParams();
  const category = slug.replace("-", " ");
  const [isLoading, setIsLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(null)
  const [totalArticles, setTotalArticles] = useState("")
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const [Articles, setArticles] = useState([])

  useEffect(() => {
    const loadBlogs = async () => {
      let req = await fetch(`/api/blogs/category/${category}?limit=9`)
      let data = await req.json()

      if (data.success) {
        await data.blogs.forEach(blog => {
          blog.date = new Date(blog.createdAt).toDateString();
        })
      }
      setTotalPages(data.totalPages)
      setIsLoading(false)
      setTotalArticles(data.totalBlogs)
      setArticles(data.blogs)
    }
    loadBlogs()
  }, [])

  const fetchPage = async (pageNumber) => {
    setIsLoading(true)
    let req = await fetch(`/api/blogs/category/${category}?page=${pageNumber}&limit=9`)
    let data = await req.json()
    if (data.success) {
      await data.blogs.forEach(blog => {
        blog.date = new Date(blog.createdAt).toDateString();
      })
      setArticles(data.blogs)
      setIsLoading(false)
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
        <div className={`icon p-2.5 bg-red-500 rounded-sm w-fit`}>📚</div>
        <h1 className="text-5xl font-bold text-center">{category}</h1>
        <p className="text-secondaryForeground">{totalArticles} articles</p>
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

        <div className="articles-container w-[95%] mx-auto mt-10 flex flex-wrap justify-center gap-5">

          {
            isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
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
              : (Articles.length > 0 ? Articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                  category={article.category}
                  imageURL={article.imageURL}
                  uid={article._id}
                />
              )) : <h2 className="text-2xl text-center text-secondaryForeground min-h-[50vh]">No articles found in this category</h2>)
          }
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