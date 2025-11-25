'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SlLocationPin } from 'react-icons/sl'
import { myData } from '@/data/myData'

const variants = { 
  hidden: {
    y: 25,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.3
    }
  }
}

const childVariants = {
  hidden: {
    y: 10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const Education = () => {

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section id='education' className='flex flex-col items-center gap-15 pt-[100px] pb-20 lg:px-44 sm:px-28 px-4'>
        <motion.h1 
          className='sm:text-5xl text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-200 z-20'
          variants={variants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          >
          EDUCATION
        </motion.h1>
        <motion.div 
          variants={variants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
          className='flex flex-col gap-15 border-l border-purple-500 sm:pl-15 pl-10'
          >
          <motion.div 
            className='relative flex flex-col gap-4'
            variants={childVariants}
            >
            <div className='flex justify-center items-center gap-3'>
              <img src="./bennett.png" alt="college-logo" className='w-10' />
              <h3 className='text-2xl sm:text-3xl font-bold'>Bennett University</h3>
            </div>
              <p className='flex items-center gap-1'><SlLocationPin /> Greater Noida, Uttar Pradesh</p>
              <div className='flex gap-4 items-center'>
              <span className='text-sm text-neutral-400'>2023 - 2027</span>
              <span className='text-xs border border-purple-500 self-start px-4 py-1 rounded-lg bg-purple-500/10 backdrop-blur-xl'>Ongoing</span>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-xl mb-2'>B.Tech CSE</h4>
              <p>CGPA - {myData.CGPA}</p>
            </div>
            <div className='absolute sm:-left-20 -left-15 top-0 bg-purple-950 h-10 w-10 border border-purple-500 rotate-45 rounded-xl' />
          </motion.div>
          <motion.div 
            className='relative flex flex-col gap-2'
            variants={childVariants}
            >
            <div className='flex justify-center items-center gap-3'>
              <img src="./school.png" alt="college-logo" className='w-10' />
              <h3 className='text-2xl sm:text-3xl font-bold'>St. Thomas School</h3>
            </div>
              <p className='flex items-center gap-1'><SlLocationPin /> Bahadurgarh, Haryana</p>
              <div className='flex gap-2 items-center'>
              <span className='text-sm text-neutral-400'>2011 - 2023</span>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-xl mb-2'>Science</h4>
              <p>Class XII - 81%</p>
              <p>Class X - 93.5%</p>
            </div>
            <div className='absolute sm:-left-20 -left-15 top-0 bg-purple-950 h-10 w-10 border border-purple-500 rotate-45 rounded-xl' />
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Education