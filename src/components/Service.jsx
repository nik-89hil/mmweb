import React from 'react'
import { motion } from "framer-motion"

export const Service = () => {
    return (
        <>
            <div className="service-box">
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
                
            </div>

        </>
    )
}
