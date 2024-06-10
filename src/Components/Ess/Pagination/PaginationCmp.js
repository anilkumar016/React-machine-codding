import React, { useEffect, useState } from 'react'
import './Pagination.css'
function PaginationCmp() {
    const [postData,setPostData]=useState([]);
    const [totalPage,setTotalPage]=useState();
    const [currentPage,setCurrentPage]=useState(1)
    const pageItemLimit=10

    const fetchPostData=async()=>{
        const API_URL=`https://jsonplaceholder.typicode.com/posts`;
        const result = await fetch(API_URL);
        const data= await result.json();
        setPostData(data);
        let pageCount= Math.ceil(data.length/pageItemLimit);
        setTotalPage(pageCount);
    }
    const startIndex = pageItemLimit*currentPage-pageItemLimit;
    const endIndex = pageItemLimit*currentPage;
    const items=postData.slice(startIndex,endIndex);
    
    const pageHandleClick=(pageN)=>{
        setCurrentPage(pageN)
    }
    const handlePrev=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }
    const handleNext=()=>{
        if(currentPage<totalPage){
            setCurrentPage(currentPage+1);
        }
    }
    const prevDisable=currentPage===1;
    const nextDisable=currentPage===totalPage;
    useEffect(()=>{
        fetchPostData();
    },[])
    
    return (
        <>
           {items&&items.map((item,idx)=>{
                return (<div key={item.id}>{item.id} {item.title}</div>) 
           })}
           <button disabled={prevDisable} onClick={handlePrev}>Prev</button>
           {
               Array.from({length:totalPage},(_,i)=>i+1).map((pageNo,pageIdx)=><button onClick={()=>pageHandleClick(pageNo)} key={pageIdx} disabled={pageNo===currentPage}>{pageNo}</button>)
           }
            <button disabled={nextDisable} onClick={handleNext}>Next</button>
        </>
    )
}

export default PaginationCmp