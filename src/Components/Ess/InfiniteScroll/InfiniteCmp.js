import React, { useCallback, useEffect, useState } from 'react'

function InfiniteCmp() {
    const [result,setResult]=useState([]);
    const inpurRef=React.createRef(null);
    const [isLoading,setIsloading]=useState(false);
    const [page,setPage]=useState(2);
    const fetchImages=async (index)=>{
        let  result= await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`);
        let data = await result.json();
        return data;
    }
   const fetchFirstPage=async ()=>{
     let data= await fetchImages(1);
     setResult(data);
   } 
   const getData=useCallback(async()=>{
     if(isLoading)
     return ;
    setIsloading(true);
    let data = await fetchImages(page);
    setResult(prevData=>[...prevData,...data]);
    setTimeout(()=>{
        setIsloading(false);
    },5000)
   
    setPage(prevPage=>prevPage+1);

   },[page,isLoading])

   useEffect(()=>{
     let observer= new IntersectionObserver(entries=>{
         let target=entries[0];
        if(target.isIntersecting){
            getData();
        }
     });
     if(inpurRef.current){
        observer.observe(inpurRef.current);
     }
     return ()=>{
        if(inpurRef.current){
            observer.unobserve(inpurRef.current);
        }
     }
   },[getData])

   useEffect(async()=>{
        fetchFirstPage();
    },[]);
    
    return (
       <div>
        
            {
                result&& result.map((item,index)=>(
                    <div><img key={item.id} src={item.thumbnailUrl} alt={item.title} /></div>
                ))
            }
            <div ref={inpurRef}> 
              {isLoading&&<h2>Loading...........</h2>}
            </div>
                
       </div>
    )
}

export default InfiniteCmp