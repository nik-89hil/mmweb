import React from 'react'

export const Subscription = () => {

    const [title, setTitle] = React.useState("STARTER PLAN")




    return (
        <>
            <div className="choose-box">
                <p className='choose-title'>
                    Select your Subscription :
                </p>
                <p className="chooser">
                    <button className='btn-plan' onClick={() => setTitle("STARTER PLAN")}>STARTER PLAN</button>
                </p>
                <p className="chooser">
                    <button className='btn-plan' onClick={() => setTitle("PRO PLAN")}>PRO PLAN</button>
                </p>
            </div>
            <br />
            <p className="SUBS-TITLE">
                {title}
            </p>

            {
                (title == "STARTER PLAN") && (
                    <p className='explain'>
                        <ul>
                            <li>
                                <span>Your websites include powerful features like <b>Google Maps and Forms </b>  integration, click-to-mail, and WhatsApp chat—making it easy for your customers to reach you instantly. </span>
                            </li>
                            <li>
                                Experience the speed and simplicity of <b>Single Page Applications (SPAs) </b>  with our expert development services!
                            </li>
                            <li>
                                No more page reloads—just fast, seamless transitions that keep users engaged.
                                Ideal for modern businesses, SPAs work great for dashboards, e-commerce, portfolios, and more.
                            </li>
                            <li>
                                Get your website online instantly with <b>free hosting (for 1 year). </b> 
                                Fast, secure, and reliable—no hidden costs or setup hassle.
                                Perfect for small businesses and personal projects.
                                Launch your site today and start growing your online presence!
                            </li>
                            <li>
                                We create <b> responsive websites </b>  that look perfect on every device—mobile, tablet, or desktop.
                                Enjoy smooth navigation, fast load times, and a seamless user experience anywhere.
                                Your site will automatically adjust to any screen size, keeping visitors engaged.
                                Stay ahead with a modern, mobile-friendly design that works for everyone!
                            </li>
                            <li>
                                with smooth, eye-catching <b>animations! </b> 
                                We add motion effects that enhance user experience without slowing down your site.
                                From subtle transitions to interactive elements, animations make your brand stand out.
                                Engage visitors and guide their attention with style and purpose!
                            </li>
                            <li>
                                Enjoy <b>free modifications for 10 days </b>  after your website goes live!
                                We’ll handle tweaks, adjustments, or small changes—no extra cost.
                                Your satisfaction matters, and we’re here to fine-tune every detail.
                                Launch with confidence knowing support is just a message away!
                            </li>
                            <li>
                                Get your website delivered <b>within just 4 working days</b> —fast, efficient, and professional.
                                Perfect for urgent launches or time-sensitive projects.
                                We combine speed with quality to meet your goals on time.
                                Let’s bring your vision to life—quickly and seamlessly!
                            </li>
                            <li>
                                Count on us for fast and reliable web development you can trust.
                                We deliver high-quality websites on time, without cutting corners.
                                Smooth performance, clean code, and dependable support—every time.
                                Your project is in safe, skilled hands!
                            </li>
                        </ul>

                        <p className="price">
                            Note: you can send your web templates also.
                            Customise and Buy Now at : (Domain charge is not included). 
                            <button>
                                <a href="" className='buy'><i class="fa-solid fa-indian-rupee-sign"></i> 3,999/- only</a>
                            </button>
                        </p>
                    </p>

                )
            }

            <br />

            {
                (title == "PRO PLAN") && (
                    <p className='explain'>
                        <ul>
                            <li>
                                We implement efficient routes and routing to ensure smooth navigation across your website or app.
                                Routing controls how users move between pages or views without full reloads, improving speed and experience.
                            </li>
                            <li>
                                We provide secure authentication and authorization to protect your website and user data.
                                Authentication verifies user identities, while authorization controls their access levels.
                                This ensures only the right users see and interact with sensitive content or features.
                                Keep your site safe and your users confident with our trusted security solutions.
                            </li>
                            <li>
                                We build user-friendly and responsive websites that are easy to navigate on any device.
                                Intuitive layouts and clear interfaces make your visitors feel right at home.
                                Your site will adapt flawlessly to smartphones, tablets, and desktops alike.
                                Deliver a seamless experience that keeps users engaged and coming back!
                            </li>
                            <li>
                                We develop powerful web apps using Node.js for the backend and React for the frontend.
                                Node.js ensures fast, scalable server-side performance, while React creates dynamic, interactive user interfaces.
                            </li>
                            <li>
                                Choose from our collection of modern, customizable web templates designed for all industries.
                                Easy to edit and fully responsive, they help you launch your website quickly and beautifully.
                                Built with clean code and best practices for SEO and performance.
                            </li>
                            <li>
                                We offer fully customizable websites tailored to your unique brand and goals.
                                From design to features, everything can be adjusted to match your vision perfectly.
                                Enjoy complete control over look, feel, and functionality without limits.
                                Stand out with a website that’s truly yours—built exactly how you want it!
                            </li>
                        </ul>

                         <p className="price">
                            Note: (Domain & Hosting charges are not included).
                            <button>
                                <a href="" className='buy'><i class="fa-solid fa-indian-rupee-sign"></i> 29,999/- only</a>
                            </button>
                            
                        </p>
                    </p>

                )
            }



        </>
    )
}
