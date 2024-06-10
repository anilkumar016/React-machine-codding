import React,{useEffect, useState} from 'react'

function FaqItemCmp({faq,index}) {
    const [isShow,setIsShow]=useState(false);
    const handleClick=()=>{
        setIsShow(!isShow);
    }
    useEffect(()=>{
       if(index===0){
        setIsShow(!isShow);
       }
    },[])
    return (
        <div  className='faq-container'>
            <div className='que'> 
                <button onClick={handleClick}>></button>
                {faq.question}
            </div>
            {
               isShow&& (<div className='ans'> {faq.answer}</div>)
            }
        </div>
    )
}

export default FaqItemCmp