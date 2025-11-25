'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SlLocationPin } from 'react-icons/sl'
import { myData } from '@/data/myData'
import Image from 'next/image'

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
    <section id='education' className='flex flex-col items-center gap-15 pt-[100px] pb-20 lg:px-44 sm:px-28 pl-15 pr-6'>
        <motion.h1 
          className='sm:text-5xl text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-blue-200 z-20'
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
          className='flex flex-col gap-15 border-l border-blue-500 sm:pl-15 pl-10'
          >
          <motion.div 
            className='relative flex flex-col gap-4 items-start'
            variants={childVariants}
            >
            <div className='flex flex-col justify-center items-start gap-3'>
              <Image
              height={150}
              width={150}
               src="/college.png" alt="college-logo" />
              <div className='flex flex-col gap-6=3'>
                <h3 className='text-xl lg:text-2xl sm:text-3xl font-bold '>Dr. Akhilesh Das Gupta Institute of Professional Studies</h3>
               <p className='font-semibold text-blue-300'>Affiliation: <span className='text-white'>Guru Gobind Singh Intraprasta University</span></p>
              </div>
              
            </div>
              <p className='flex items-center gap-1 bg-gradient-to-r bg-clip-text  from-blue-500 to-blue-200 '> <SlLocationPin /> New Delhi, India</p>
              <div className='flex gap-4 items-center'>
              <span className='text-sm text-neutral-400'>2023 - 2027</span>
              <span className='text-xs border border-blue-500 self-start px-4 py-1 rounded-lg bg-blue-500/10 backdrop-blur-xl'>Ongoing</span>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-xl mb-2'>B.Tech in  Artificial Intelligence and Data Science </h4>
              <p>CGPA - {myData.CGPA}</p>
            </div>
            <div className='absolute sm:-left-20 -left-15 top-0 bg-blue-950 h-10 w-10 border border-blue-500 rotate-45 rounded-xl' />
          </motion.div>
          
          
        </motion.div>
    </section>
  )
}

export default Education