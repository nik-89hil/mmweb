import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export const Intro = () => {
  return (
    <div className='box'>
        <p className='passage change'>
            We believe in innovation, transparency, and customer satisfaction. With a team of passionate individuals, we’re committed to delivering value and making your journey with us seamless and enjoyable.
        </p>
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
        
        > Get Your Website Just In Simple Steps</motion.h1>
        <br />
        <br />

        <motion.div className="imager"

        initial={{
            backgroundColor:"white",
            opacity:1,
            borderRadius:"60px"
        }}
        
        animate={{
            backgroundColor:"grey",
            opacity:.2,
        }}

        transition={{
            delay:.7,
            duration:3,
            ease:"linear",
            repeat:Infinity
        }}
        
        
        
        
        
        >

        </motion.div>
        
        
        
    </div>
  )
}
