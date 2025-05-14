import React from 'react'
import {motion} from 'framer-motion'

export const Intro = () => {
  return (
    <div className='box'>
        <p className='passage change'>
            We believe in innovation, transparency, and customer satisfaction. With a team of passionate individuals, we’re committed to delivering value and making your journey with us seamless and enjoyable.
        </p>
        <motion.h1 className='front'
        initial={{
            rotate:"30deg",
        }}
        whileInView={{
            rotate:"0deg"
        }}

        transition={{
            delay:.2,
            duration:.4
        }}
        >Customise</motion.h1>
        <motion.h1 className='front'
        initial={{
            x:-150,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            delay:.4,
            duration:.7
        }}
        
        >Your Website</motion.h1>
        <motion.h1 className='front'
        initial={{
            opacity:0
        }}

        whileInView={{
            opacity:1
        }}

        transition={{
            delay:.6,
            duration:.7
        }}
        
        
        
        >
            Simple & 
            <br />
            Hastle Free
            <br />
            At Affordable Rates
        </motion.h1>
    </div>
  )
}
