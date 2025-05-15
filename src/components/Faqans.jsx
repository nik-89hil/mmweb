
import React from 'react'

export const Faqans = () => {

    const faq = [{
        quest:"How long will it take to build my website?",
        ans:"With the Starter subscription, your website will be ready within 4 working days."
    },{
    quest:"How long will it take to build my website?",
        ans:"With the Starter subscription, your website will be ready within 4 working days."
    },
    {
    quest:"How long will it take to build my website?",
        ans:"With the Starter subscription, your website will be ready within 4 working days."
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
