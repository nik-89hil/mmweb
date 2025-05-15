import React from 'react'

export const Subscription = () => {

    const [title,setTitle] = React.useState("STARTER PLAN")




  return (
    <>
    <div className="choose-box">
        <p className='choose-title'>
            Select your Subscription : 
        </p>
        <p className="chooser">
            <button className='btn-plan' onClick={()=>setTitle("STARTER PLAN")}>STARTER PLAN</button>
        </p>
        <p className="chooser">
            <button className='btn-plan' onClick={()=>setTitle("PRO PLAN")}>PRO PLAN</button>
        </p>
    </div>
    <br />
    <p className="SUBS-TITLE">
            {title}
    </p>

    </>
  )
}
