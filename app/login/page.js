import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />

            <div className='h-[calc(100vh-44px)] flex flex-col items-center justify-center gap-2'>

                <div className="w-[50px] h-[50px] rounded-lg bg-gradient-to-br from-[#89a1ff] to-[#00cfc4] text-white flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl text-white">D</span>
                </div>

                <h1 className='text-3xl font-semibold'>Sign In</h1>

                <p className='text-secondaryForeground'>Continue with your Google account</p>

                <button className='text-lg justify-center items-center flex gap-1 bg-gradient-to-r from-[#89a1ff] to-[#00cfc4] cursor-pointer rounded-lg px-5 py-2 font-semibold mt-5 hover:-translate-y-1 transition-all duration-300'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="35"
                        height="35"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.5 6.8l6.2 5.2C39.6 36.3 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z"
                        />
                    </svg>
                    Continue with Google
                </button>

            </div>

            <Footer />
        </div>
    )
}

export default page