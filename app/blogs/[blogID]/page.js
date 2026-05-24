"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const page = () => {
    const { blogID } = useParams();
    const blog = {
        title: "The Tutorial Trap: How to Build Real Projects Without Tutorials",
        author: "Lavkush",
        date: "1 Jan 2023",
        category: "React",
        imageURL: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg",
        content: `
Learning programming through tutorials feels productive. You watch videos, understand concepts, and follow along with the instructor. But at some point, every developer realizes a painful truth:

> Watching tutorials is not the same as building real projects.

The real growth starts when you open an empty code editor and try to build something on your own.

---

## The Tutorial Trap

Many beginners spend months watching courses without creating anything independently. This is called **tutorial hell**.

You may feel confident while following along, but the moment you try to build a project yourself, questions start appearing:

- How should I structure folders?
- How do I manage state?
- How do I connect the backend?
- Why is this bug happening?
- How do I deploy this project?

That confusion is normal.

And honestly, that confusion is where real learning begins.

---

## Projects Teach What Tutorials Cannot

When you build projects, you learn:

### Problem Solving

You stop depending on step-by-step guidance and start thinking like a developer.

### Debugging

Real developers spend a huge amount of time fixing bugs. Projects force you to improve this skill.

### Architecture

You begin understanding:
- component structure
- backend organization
- API flow
- database design
- authentication systems

### Confidence

Nothing feels better than opening a project you built yourself and thinking:

> “Yeah, I actually made this.”

---

## Start Small

Your first projects do not need to be massive.

Good beginner projects:
- Todo App
- Weather App
- Password Generator
- Notes App
- Blog Website
- Portfolio Website

After that, move toward:
- Full Stack Apps
- Authentication
- Dashboards
- SaaS Projects
- Real-world APIs

---

## The Best Way to Learn

A strong learning cycle looks like this:

1. Learn a concept
2. Build something using it
3. Get stuck
4. Search documentation
5. Fix problems
6. Repeat

That cycle builds real experience.

---

## Build Projects Publicly

Share your work on:
- GitHub
- LinkedIn
- Twitter/X

Even unfinished projects are valuable.

You can:
- track your progress
- build a portfolio
- attract opportunities
- meet other developers

---

## Final Thoughts

Tutorials are useful.

But projects transform knowledge into skill.

The developers who improve the fastest are usually the ones who:
- build consistently
- experiment fearlessly
- fail often
- keep shipping projects

So the next time you finish learning a new concept, do not start another tutorial immediately.

Build something with it.

Even if it breaks.

Especially if it breaks.

Because that is where real development starts 🚀
    `
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
                className='container mx-auto px-1.5'
            >
                
                <Image src={blog.imageURL} alt='Article image' width={500} height={500} className='w-full h-100 object-cover mt-5 rounded-2xl' />

                <div className='mt-7 w-4/5 mx-auto max-[1024px]:w-full'>
                    <div className='relative'>
                        <span className='rounded-2xl p-1 px-3 text-[14px] bg-gradient-to-r from-purple-500 to-blue-500 text-white'>{blog.category}</span>
                        <h1 className='text-5xl font-bold mt-2 max-[550px]:text-4xl'>{blog.title}</h1>

                        <h3 className='text-[22px] font-bold mt-3 ml-2'>{blog.author}</h3>
                        <i className='text-[16px] text-secondaryForeground ml-2'>{blog.date}</i>

                        <div className="h-px bg-border w-full mt-2"></div>

                        <button className='absolute bottom-3 right-3 p-1 bg-[#9796ff] rounded-lg text-lg text-white cursor-pointer dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300 font-semibold'>💾 Save</button>
                    </div>

                    <div className='mt-7 prose dark:prose-invert max-w-none w-[95%] mx-auto'>
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default page