import { button } from 'framer-motion/client'
import React from 'react'
import {motion} from "framer-motion"



export const Tools = () => {

    const tool = [
        "React","Bootstrap","Daisy UI","Tailwind CSS", "Vite", "Node",
        "Express", "Mongodb", "CSS3", "HTML5", "Javascript", "Framer-Motion",

    ]



  return (
    <>
    <div className="tool-box">
        <h1 className='front' >Trending Tools for Your Website</h1>
        <br />
        <div className="explain">
            <p>
                At mmweb.onrender.com, we specialize in building cutting-edge websites and web applications using the latest tools and technologies in the industry. Our tech stack includes powerful front-end frameworks like React, Tailwind CSS, Bootstrap, and Daisy UI, enabling us to craft beautiful, responsive, and highly interactive user interfaces. We leverage Vite for blazing-fast development and optimized performance, while Framer Motion adds smooth, engaging animations to enhance user experience. On the backend, we use Node.js, Express, and MongoDB to develop scalable, secure, and efficient server-side applications. Our expertise also covers core web technologies like HTML5, CSS3, and JavaScript, ensuring every project is built on a solid, modern foundation. With this powerful stack, we deliver professional, future-ready solutions tailored to your business needs.
            </p>
        </div>
        <div className="tooler">
            {
               tool.map((item,id)=>{
                return(
                    <motion.button key={id} className='tools'

                    initial={{
                        opacity:0,
                        rotate:"30deg"
                    }}

                    whileInView={{
                        opacity:1,
                        rotate:"0deg"
                    }}

                    whileHover={{
                        rotate:"-30deg",
                    }}

                    transition={{
                        delay:.2,
                        duration:.7,
                        ease:"backInOut",
                        repeat:1
                    }}
                    
                    >
                        {item}
                    </motion.button>
                )
            })
            }

        </div>
        <br />
    </div>

    <div className="animate-box">
        <motion.h1

        initial={{
            rotateY:"-10deg",
            borderBottom:"6px solid purple",
            rotateX:"80deg"

        }}

        whileInView={{
            rotateX:"0deg"
        }}

        transition={{
            duration:2,
            delay:.4
        }}

        style={{
            textAlign:"center"
        }}
        
        
        
        
        >Animation gives You Wings..</motion.h1>
        <br />
        <motion.h1

        initial={{
            rotateY:"-10deg",
            borderBottom:"6px solid purple",
            rotateX:"80deg"

        }}

        whileInView={{
            rotateX:"0deg"
        }}

        transition={{
            duration:3.5,
            delay:.4,
            ease:"easeInOut"
        }}

        style={{
            textAlign:"center"
        }}
        
        
        
        
        >Fast & User Friendly Interface..</motion.h1>
        
    </div>

    </>
  )
}
