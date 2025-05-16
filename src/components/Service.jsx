import React from 'react'
import { motion } from "framer-motion"

import start from "../images/starter.png"

export const Service = () => {
    return (
        <>
            <div className="service-box" id='service'>
                <motion.h1

                    style={{
                        textAlign: 'center'
                    }}

                    initial={{
                        y: 400,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1,
                        delay: .4,
                        ease: 'easeInOut'
                    }}

                >Services</motion.h1>
                <br />
                <p className='explain'>
                    Unlock the power of the web with our expert web development services!
                    We build fast, responsive, and modern websites tailored to your business goals.
                    From startups to growing brands, we create digital experiences that convert.
                    Enjoy clean code, mobile optimization, and SEO-friendly structures.
                    Choose from two value-packed subscription plans to suit your needs:
                </p>
                <br />
                <div className="plan-gal">
                    <motion.img src={start} alt="plan"

                    initial={{
                        scale:0,
                        opacity:0
                    }}

                    whileInView={{
                        scale:1,
                        opacity:1,
                    }}

                   
                    
                    transition={{
                        duration:2,
                        delay:.4,
                        ease:"backInOut",
                        type:"spring",
                        repeat:Infinity,
                        repeatDelay:.4
                    }}
                    
                    
                    />

                </div>
                
            </div>

        </>
    )
}
