"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import CategoryCard from '@/components/category-card'
import { categories } from '@/lib/categories'

const CategoryPage = () => {
  return (
    <div>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-[50vh] flex justify-center items-center flex-col gap-3.5 bg-secondaryLight dark:bg-secondaryDark"
      >
        <div className="icon p-2.5 bg-red-500 rounded-sm w-fit">📚</div>
        <h1 className="text-5xl font-bold text-center">All Categories</h1>
        <p className="text-secondaryForeground max-w-2xl text-center">
          Browse all topic categories and find articles that match your interests across development, design, AI, cloud, and more.
        </p>
      </motion.div>

      <div className="h-px bg-border w-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-10 container mx-auto text-center"
      >

        <div className="categories-container flex flex-wrap justify-center gap-6 mt-5 text-start">
          {categories.map((item) => (
            <CategoryCard
              key={item.category}
              category={item.category}
              description={item.description}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default CategoryPage
