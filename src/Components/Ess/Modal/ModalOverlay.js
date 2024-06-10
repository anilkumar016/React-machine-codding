import React, { useState } from 'react'
import './Modal.css'
function ModalOverlay() {
    const [isShow,setIsShow]=useState(false);
    const [isOfferAccepted,setIsOfferAccepted]=useState(false);
    const handleOffer=()=>{
        setIsShow(true);
    }
    const handleClose=()=>{
        setIsShow(false);
    }
    const handleAccepted=()=>{
        setIsOfferAccepted(true);
        setIsShow(false);
    }
    const handleModleClose=(e)=>{
        if(e.target.className==='btn-modal'){
            setIsShow(false);
        }
    }
    return (
        <div className={`container-box ${isShow?'bgClass':''}`}>
            {!isShow&!isOfferAccepted? <div className='btn-box'>
                <button className='btn' onClick={handleOffer}>Show Offer</button>
            </div>:null}
            {isShow?<div className='btn-modal' onClick={handleModleClose}>
                   <div className='btn-custom-content'>
                        <button className='btn-closes' onClick={handleClose}>X</button>
                        <div className='btn-modal-content'>
                            Create a dismissible modal overlay. The UI should initially show a 'Show offer'.
                        </div>
                        <button onClick={handleAccepted}>Accept Offer</button>
                   </div>
            </div>:null}
            {isOfferAccepted?<div className='ofr-accepted'> Offer accepted</div>
            :null}
            
        </div>
    )
}

export default ModalOverlay