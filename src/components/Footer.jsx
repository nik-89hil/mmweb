import React from 'react'

export const Footer = () => {
  return (
    <>

    <div className="foot-box">
        <div className="foot-First">
            <h2>mmweb.com</h2>
            <p>make my web</p>
            <p>
                <i class="fa-solid fa-copyright"></i> | All Rights Reserved
            </p>
            <p>2025| Delhi, India</p>
        </div>
        <div className="foot-second">
            <h2>Usefull Links:</h2>
            <p className='foot-links'>
                <a href="#home">Home</a>
                <br />
                <a href="#service">Service</a>
                <br />
                <a href="#about">About</a>
                <br />
                <a href="#contact">Contact</a>
            </p>
        </div>
        <div className="foot-third">
            <h2>Contact us on:</h2>
            <p className='social'>
                <a href="https://www.instagram.com/beeconnect_0/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:nikhilkumar19072002@gmail.com">
                    <i class="fa-solid fa-envelope-open"></i>
                </a>
                <a href="tel:+918384072633">
                    <i class="fa-solid fa-phone"></i>
                </a>

            </p>
        </div>

    </div>

    </>
  )
}
