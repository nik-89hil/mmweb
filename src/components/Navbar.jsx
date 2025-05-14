import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import image1 from "../images/webimg.png";




export const Navbar = () => {

    const [open,setOpen] = React.useState(false);



  return (
    <>
    <div className="nav-box">
        <div className="nav">
            <div className="comp"><span className='comp-name'>mmweb.com</span></div>
            <div className="open-box">
                <a className="email-arrow"><i class="fa-regular fa-envelope"></i></a>
                <a className="whats-arrow"><i class="fa-brands fa-whatsapp"></i></a>
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
            <div className="full-name">
            <p>
                {
                (open)?(<button className='full-scale' onClick={()=>setOpen(!open)}> <i className="fa-solid fa-xmark"></i> close</button>):(null)
                } 
            </p>
            <br />
            <p className='img-holder'>
                <img src={image1} alt="images" />

            </p>
        </div>
        <div className="option-box">
            <p className="text-box">
                <a href="">Home</a>
            </p>
            <p className="text-box">
                <a href="">Tools & Technologies</a>
            </p>
            <p className="text-box">
                <a href="">Services</a>
            </p>
            <p className="text-box">
                <a href="">About</a>
            </p>
            <p className="text-box">
                <a href="">Contact</a>
            </p>
            

        </div>

            </motion.div>
            

        ):(null)
    }
    </AnimatePresence>




    
   
    </>
  )
}

