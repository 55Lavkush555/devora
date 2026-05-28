import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DeleteButton from './ConfirmDialog'

const UserArticle = ({ imageURL, title, date, uid, handleDelete }) => {

  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[#00cfc4] hover:shadow-xl">

      <div className="flex h-full max-[768px]:flex-col">

        {/* Image */}
        <Link
          href={`/blogs/${uid}`}
          className="relative min-w-[320px] max-w-[320px] h-[220px] max-[768px]:max-w-full max-[768px]:w-full max-[768px]:h-[220px] overflow-hidden"
        >
          <Image
            src={imageURL}
            alt="blog image"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-5">

          <div className="space-y-2">

            <Link href={`/blogs/${uid}`}>
              <h2 className="text-2xl font-bold leading-tight line-clamp-2 hover:text-[#00cfc4] transition-colors">
                {title}
              </h2>
            </Link>

            <p className="text-sm text-muted-foreground">
              {date}
            </p>

          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-5 max-[768px]:justify-center">

            <DeleteButton handleDelete={handleDelete} uid={uid} />

            <Link href={`/dashboard/edit/${uid}`}>
              <button className="px-4 py-2 rounded-xl bg-[#f2f0ff] text-[#7a6eff] font-medium hover:bg-[#e4e2ff] transition-all duration-300 cursor-pointer dark:bg-[#1d1e36] dark:hover:bg-[#2b2c53]">
                Edit
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserArticle