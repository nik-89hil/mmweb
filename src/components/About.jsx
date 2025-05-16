import React from 'react'

export const About = () => {
    return (
        <>
            <div className="about-box">
                <h1>About</h1>
                <br />
                <p className='explain'>
                    Hi, I’m Nikhil — a MERN Full Stack Developer with 1.5 years of hands-on experience in building dynamic, responsive, and scalable web applications.
                </p>
                <br />
                <p className='explain'>
                    I specialize in the latest tools and technologies including React, Node.js, MongoDB, and Express.js.
                    From frontend design to backend logic, I craft complete web solutions that are fast, user-friendly, and secure.
                    Whether you're starting a new project or bringing your business online, I’m here to help you launch with confidence and quality.
                    <br />
                    Let’s build something powerful together!
                </p>
                <p className="explain">
                    contact : 
                    <br />
                    <button className='btn-contact email'><a href=""><i class="fa-solid fa-envelope"></i> email</a></button>
                    <button className='btn-contact whats'><a href=""><i class="fa-brands fa-whatsapp"></i> whatsapp</a></button>
                </p>
            </div>

        </>
    )
}
