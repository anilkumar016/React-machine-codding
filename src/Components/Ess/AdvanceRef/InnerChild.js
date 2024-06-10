import React, { Children, useEffect } from 'react'

function InnerChild(props) {
    console.log(props) 
    useEffect(()=>{
    
    },[])
    return (
        <div>InnerChild</div>
    )
}

export default InnerChild