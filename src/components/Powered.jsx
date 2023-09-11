import React from 'react'
import { SiTailwindcss, SiVite, SiVercel, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

function Powered() {
  return (
    <div className='pt-36 lg:pt-16'>
      <div className='w-10/12 mx-auto flex justify-between items-center flex-col px-2 lg:flex-row'> 
        <motion.h2 variants={{hidden: {opacity: 0, x:-75}, visible: {opacity: 1, x:0}}} initial="hidden" animate="visible" transition={{duration: 0.75, delay: 0.25}} className='bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r text-center mb-10 from-pink-500 to-violet-500 xl:h-full lg:mb-0 xl:pb-2'>This Portfolio Powered By</motion.h2>
        <motion.div variants={{hidden: {opacity: 0, x:75}, visible: {opacity: 1, x:0}}} initial="hidden" animate="visible" transition={{duration: 0.75, delay: 0.25}} className='text-3xl flex gap-10 text-slate-700 dark:text-white lg:w-1/2 justify-center'>
          <div className='p-2 rounded-full border-4 border-x-primary hover:scale-110'><SiTailwindcss /></div>
          <div className='p-2 rounded-full border-4 border-x-primary hover:scale-110'><SiVite /></div>
          <div className='p-2 rounded-full border-4 border-x-primary hover:scale-110'><SiVercel /></div>
          <div className='p-2 rounded-full border-4 border-x-primary hover:scale-110'><SiReact /></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Powered