import React, { useState } from 'react'
import './Rating.css'
function RatingCmp() {
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    console.log(rating,hover);

    return (
            <div className='rating-container'> 
                {
                    [1,2,3,4,5].map((item,idx)=>(<button 
                        onClick={()=>setRating(item)}
                        onMouseOver={()=>setHover(item)}
                        onMouseLeave={()=>setHover(rating)}
                        key={idx} id={item}><span className={`star ${item <= (rating&hover||hover)?'on':'off'}`}>&#9733;</span></button>))
                }
            </div>
    )
}

export default RatingCmp