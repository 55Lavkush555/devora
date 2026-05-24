import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserArticle = ({ imageURL, title, date, uid }) => {
  return (
    <div className='w-full border border-border bg-card rounded-lg flex items-center max-[768px]:flex-col max-[768px]:items-start max-[768px]:w-75 max-[768px]:pb-3 gap-2 overflow-hidden max-[768px]:hover:-translate-y-2 transition-all duration-300 hover:border-[#00cfc4]  max-[768px]:min-h-98 max-h-50'>
      <Link href={`/blogs/${uid}`}>
        <Image src={imageURL} alt='article img' width={300} height={200} className='w-75 object-cover max-[768px]:h-50' />
      </Link>

      <div className='flex flex-col gap-2 max-[768px]:text-center w-full'>
        <Link href={`/blogs/${uid}`}>
          <h2 className='text-2xl font-semibold max-h-24 overflow-hidden'>{title}</h2>
          <i className='text-secondaryForeground'>{date}</i>
        </Link>
        <div className='flex gap-1 items-center max-[768px]:justify-center'>
          <button className='border-border border font-semibold text-red-500 hover:border-red-500 px-3 py-1 rounded-lg cursor-pointer'>Delete</button>
          <Link href={`/dashboard/edit/${uid}`}>
            <button className='bg-[#f2f0ff] font-semibold hover:bg-[#e4e2ff] text-[#7a6eff] py-1 px-3 rounded-lg cursor-pointer dark:bg-[#1d1e36] dark:hover:bg-[#2b2c53]'>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserArticle