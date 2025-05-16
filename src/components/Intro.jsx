import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import front from "../images/FRONT.jpg";

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

        <div className="imager"
        >
            <img src={front}  alt='front_image'/>

        </div>
        <br /><br />
        
        
        
    </div>
  )
}
