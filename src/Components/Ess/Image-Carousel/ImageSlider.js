import React, { useEffect,useState } from 'react'
import './Slider.css';
function ImageSlider() {
    const [images,setImages]=useState([]);
    const [index,setIndex]=useState(0);
    const fetchImagesData=async ()=>{
        let url=`https://www.reddit.com/r/aww/top/.json?t=all`;
        let result= await fetch(url);
        let final_res= await result.json();
        let temp=final_res.data.children.map(item=>item.data.url_overridden_by_dest).filter(item=>item.includes('.jpg'));
        setImages(temp)  

    }
    const handleClick=(dir)=>{
        if(dir==='right'){
            if(images.length==index){
                setIndex(0);
            }
            setIndex(idx=>idx+1)
        }else{
            if(images.length==0){
                setIndex(images.length);
            }
            setIndex(idx=>idx-1);
        }

    }
    
    useEffect(()=>{
       let timer=setInterval(()=>{
        handleClick('right')
       },1000);
       return ()=>{
        clearInterval(timer);
       }
    },[index])
    useEffect(()=>{
        fetchImagesData();
    },[])
  return (
    <div>
        <div className='slider-container'>
            <button onClick={()=>handleClick('left')} className='left'>{"<"}</button>
            <img src={images[index]} />
            <button  onClick={()=>handleClick('right')} className='right'>{">"}</button>

        </div>
    </div>
  )
}

export default ImageSlider