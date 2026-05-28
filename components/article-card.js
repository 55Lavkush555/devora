import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ArticleCard = ({ title, date, category, imageURL, uid }) => {
  return (
    <Link href={`/blogs/${uid}`}>

      <div className='relative w-76 bg-card rounded-2xl overflow-hidden min-h-[355px] border-[1px] border-border text-start flex flex-col gap-1.5 hover:-translate-y-2 transition-all duration-300'>
        <span className='absolute top-2 left-2 rounded-2xl p-1 px-3 text-[12px] bg-gradient-to-r from-purple-500 to-blue-500 text-white'>{category}</span>
        <Image src={imageURL} width={304} height={200} alt='article' className='h-[200px] object-cover' />

        <p className='ml-3 mb-1.5 text-secondaryForeground text-[12px]'>{date}</p>
        <div>
          <h3 className='text-[20px] font-semibold ml-3 max-h-[90px] overflow-hidden'>{title}</h3>
        </div>
      <span className='absolute bottom-2 right-2 text-[12px] text-secondaryForeground'>read more...</span>
      </div>
    </Link>
  )
}

export default ArticleCard