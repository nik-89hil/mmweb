import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import image1 from "../images/webimg.png";

import imageLogo from "../images/mmweb.png";


export const Navbar = () => {

    const [open,setOpen] = React.useState(false);



  return (
    <>
    <div className="nav-box">
        <div className="nav">
            <div className="comp">
                <span className='comp-name'>mmweb.com</span>
            </div>
            <div className="open-box">
                <a href='mailto:nikhilkumar19072002@gmail.com' className="email-arrow"><i class="fa-regular fa-envelope"></i></a>
                <a href='https://wa.me/+918384072633' className="whats-arrow"><i class="fa-brands fa-whatsapp"></i></a>
                <button className="down-arrow " onClick={()=>setOpen(!open)}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </div>

    
    <AnimatePresence>
    {
        (open)?(
            
            <motion.div className="menu-open"
            initial={{
                y:-200,
                opacity:0,
            }}

            animate={{
                y:0,
                opacity:1
            }}

            transition={{
                duration:1,
                delay:.4,
                ease:"backInOut"
            }}

            exit={{
                y:-500,
                opacity:.2
            }}
            >
            <div className="image-cover">
                <motion.img src={imageLogo} alt="logo"

                initial={{
                    scale:1
                }}

                whileInView={{
                    scale:2
                }}

                transition={{
                    duration:3,
                    delay:.4,
                    ease:"linear",
                    repeat:Infinity
                }}
                
                
                
                />
            </div>
            
        <div className="option-box">
            <p>
                {
                (open)?(<button className='full-scale' onClick={()=>setOpen(!open)}> <i className="fa-solid fa-xmark"></i> close</button>):(null)
                } 
            </p>
           
            <p className="text-box">
                <a href="#home" onClick={()=>setOpen(!open)}>#Home</a>
            </p>
            <p className="text-box">
                <a href="#toolsAndtecnologies" onClick={()=>setOpen(!open)}>#Tools & Technologies</a>
            </p>
            <p className="text-box">
                <a href="#service" onClick={()=>setOpen(!open)}>#Services</a>
            </p>
            <p className="text-box">
                <a href="#about" onClick={()=>setOpen(!open)}>#About</a>
            </p>
            <p className="text-box">
                <a href="#contact" onClick={()=>setOpen(!open)}>#Contact</a>
            </p>
            

        </div>

            </motion.div>
            

        ):(null)
    }
    </AnimatePresence>




    
   
    </>
  )
}

