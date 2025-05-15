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
                                <span>Your websites include powerful features like Google Maps integration, click-to-mail, and WhatsApp chat—making it easy for your customers to reach you instantly. </span>
                            </li>
                            <li>
                                Experience the speed and simplicity of Single Page Applications (SPAs) with our expert development services!
                            </li>
                            <li>
                                No more page reloads—just fast, seamless transitions that keep users engaged.
                                Ideal for modern businesses, SPAs work great for dashboards, e-commerce, portfolios, and more.
                            </li>
                            <li>
                                Get your website online instantly with free hosting included in every plan!
                                Fast, secure, and reliable—no hidden costs or setup hassle.
                                Perfect for small businesses and personal projects.
                                Launch your site today and start growing your online presence!
                            </li>
                            <li>
                                We create responsive websites that look perfect on every device—mobile, tablet, or desktop.
                                Enjoy smooth navigation, fast load times, and a seamless user experience anywhere.
                                Your site will automatically adjust to any screen size, keeping visitors engaged.
                                Stay ahead with a modern, mobile-friendly design that works for everyone!
                            </li>
                            <li>
                                with smooth, eye-catching animations!
                                We add motion effects that enhance user experience without slowing down your site.
                                From subtle transitions to interactive elements, animations make your brand stand out.
                                Engage visitors and guide their attention with style and purpose!
                            </li>
                            <li>
                                Enjoy free modifications for 10 days after your website goes live!
                                We’ll handle tweaks, adjustments, or small changes—no extra cost.
                                Your satisfaction matters, and we’re here to fine-tune every detail.
                                Launch with confidence knowing support is just a message away!
                            </li>
                            <li>
                                Get your website delivered within just 4 working days—fast, efficient, and professional.
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
                            <a className="rate"> Customise and Buy Now at : </a>
                            <a href="" className='buy'><i class="fa-solid fa-indian-rupee-sign"></i> 3999/- only + domain charges</a>
                        </p>
                    </p>

                )
            }

            <br />

            {
                (title == "PRO PLAN") && (
                    <p className='explain'>
                        hi from pro
                    </p>

                )
            }



        </>
    )
}
