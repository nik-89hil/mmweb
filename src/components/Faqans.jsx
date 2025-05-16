
import React from 'react'

export const Faqans = () => {

    const faq = [{
        quest:"How long will it take to build my website?",
        ans:"With the Starter subscription, your website will be ready within 4 working days."
    },{
    quest:"Do you offer website maintenance and support?",
        ans:"Yes! We offer ongoing website maintenance plans that include updates, backups, security checks, and content changes to keep your website running smoothly."
    },
    {
    quest:" Will my website be mobile-friendly and SEO optimized?",
        ans:"Absolutely. All our websites are designed to be responsive, meaning they work perfectly on phones, tablets, and desktops. We also follow SEO best practices to help your website rank better in search engine results."
    },{
    quest:" How do I buy a website?",
        ans:"Please send us an email or WhatsApp message so we can understand your requirements and offer you the best solution."
    },
    
]






  return (
    <>
      <div className="faq">
        <h1 className='faqheading' style={{textAlign:'center'}}>FAQ</h1>
        <br />
        <p style={{textAlign:'center'}}>
             {
                faq.map((item,id)=>{
                    return(
                        <p>
                            <h2 className='faqheading'>{item.quest}</h2>
                            <p className='explain' style={{textAlign:'center'}}>{item.ans}</p>
                        </p>
                        
                    )
                })

             }
        </p>
       

      </div>
    </>
  )
}
