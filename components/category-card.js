import React from 'react'
import Link from 'next/link'

const CategoryCard = ({ category, description, iconColor }) => {
  const colors = [
    "bg-orange-400",
    "bg-purple-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
  ]

  const colorClass = colors[iconColor % colors.length]
  const slug = category.replace(/\s+/g, '-');

  return (
    <Link href={`/category/${slug}`}>
      <div className='w-76 bg-card rounded-lg p-4 border-[1px] border-border min-h-[220px]'>
        <div className={`icon p-2.5 ${colorClass} rounded-sm w-fit`}>📚</div>
        <h3 className='text-[20px] font-semibold mt-2'>{category}</h3>
        <p className='text-[#5d6080]'>{description}</p>
      </div>
    </Link>
  )
}

export default CategoryCard