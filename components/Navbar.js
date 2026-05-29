"use client"
import React from 'react'
import ThemeToggle from "@/components/theme-toggle";
import Link from 'next/link';
import { useState } from 'react';
import {
    SignInButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { isSignedIn } = useUser();

    return (
        <div>
            <nav className="container flex mx-auto items-center justify-around my-2 max-[630px]:justify-between px-1">
                <div className='flex justify-center items-center gap-1.5 cursor-pointer'>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#89a1ff] to-[#00cfc4] text-white flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg text-white">D</span>
                    </div>
                    <h1 className="text-2xl font-medium bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] bg-clip-text text-transparent cursor-pointer">Devora</h1>

                </div>


                <ul className="flex gap-4 items-center text-[16px] font-semibold max-[630px]:hidden">
                    <li><Link href={"/"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Home</Link></li>
                    <li><Link href={"/category"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Categories</Link></li>
                    <li><Link href={"/blogs"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Blogs</Link></li>
                </ul>

                <div className="flex justify-between items-center gap-2">
                    <ThemeToggle />

                    {isSignedIn ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Dashboard"
                                    href="/dashboard"
                                    labelIcon="📊"
                                />

                                <UserButton.Link
                                    label="Saved Blogs"
                                    href="/dashboard/saved"
                                    labelIcon="📂"
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <SignInButton className="px-3 py-2 bg-[#9796ff] rounded-lg text-lg text-white cursor-pointer dark:hover:bg-[#8887e7] hover:bg-[#867bfe] transition-all duration-300" />
                    )
                    }


                    <button className='min-[630px]:hidden' onClick={() => setIsOpen(!isOpen)}><img src={`${isOpen ? "/img/close.png" : "/img/hamburger.png"}`} alt="" className='w-7 cursor-pointer dark:invert' /></button>
                </div>
            </nav>

            <div className="h-px bg-border w-full"></div>

            <div className={`${isOpen ? "block" : "hidden"} container mx-auto mt-2 min-[630px]:hidden`}>
                <ul className="flex flex-col gap-4 items-center text-[16px] font-semibold">
                    <li><Link href={"/"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Home</Link></li>
                    <li><Link href={"/category"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Categories</Link></li>
                    <li><Link href={"/blogs"} className="hover:text-[#8b8aeb] transition-colors duration-300 border-[#8b8aed] hover:border-b-2 hover:border-[#8b8aed]">Blogs</Link></li>
                </ul>
                <div className="h-px bg-border w-full mt-2"></div>
            </div>
        </div>
    )
}

export default Navbar