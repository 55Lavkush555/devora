"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import ArticleCard from "@/components/article-card";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
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
    }  
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
        className="h-[calc(100vh-44px)] flex flex-col justify-center gap-5 items-center"
      >

        <h1 className="text-5xl h-14 font-bold bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] bg-clip-text text-transparent max-[568px]:text-4xl max-[568px]:h-11 max-[426px]:text-[29px]">Insights into the Future</h1>

        <h1 className="text-5xl font-bold max-[568px]:text-4xl max-[568px]:h-auto max-[426px]:text-[29px]">of Technology</h1>

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
            <CategoryCard category={"Web development"} description={"Learn modern web development with frontend, backend, APIs, frameworks, and real-world projects."} iconColor={0} />
            <CategoryCard category={"React"} description={"Explore React concepts, hooks, component architecture, state management, and scalable UI development."} iconColor={1} />
            <CategoryCard category={"Next.js"} description={"Build production-ready full stack applications using Next.js, App Router, Server Actions, and modern patterns."} iconColor={2} />
            <CategoryCard category={"JavaScript"} description={"Master JavaScript fundamentals, ES6+, async programming, DOM manipulation, and advanced concepts."} iconColor={3} />
            <CategoryCard category={"Python"} description={"Learn Python programming for automation, backend development, scripting, and problem solving."} iconColor={4} />
            <CategoryCard category={"AI"} description={"Discover artificial intelligence, machine learning, AI tools, and practical AI-powered development workflows."} iconColor={5} />
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
            recentArticles.map((article, index) => (
              <ArticleCard key={index} title={article.title} author={article.author} date={article.date} category={article.category} imageURL={article.imageURL} uid={"12h3hc3xaadf3"} />
            ))
          }
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
}
