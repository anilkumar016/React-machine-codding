import React, { useEffect, useState } from 'react'
import './Job.css'
function Job() {
  const [postId,setPostId]=useState([]);
  const [metaData,setMetaData]=useState([])
  const fetchData= async (id)=>{
    let url=`https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    try{
      let result = await fetch(url);
      let data = await result.json();
      return data;
    }catch(e){
      console.log(e)
    }
  }
  const getTitle=(text)=>{
      let jobText=text.split('(').toString().split(')');
      return jobText[0];
  }
  const getDesc=(text)=>{
    let jobText=text.split('(').toString().split(')');
    return jobText[1];
  }
  const getFormatedDate=(unitimeStap)=>{
    const date = new Date(unitimeStap * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formtedDate = `${month}/${day}/${year}`;
   
    return formtedDate;
  }
  const fetchMetaData=async(ids)=>{
    let allApis= ids.map(id=>{
      return fetchData(id)
    });
    let results = await Promise.all(allApis);
    if(results.length>0){
        let result = results.map((item,index)=>{
              let obj={
                jobTitle:getTitle(item.title),
                jobDec:getDesc(item.title),
                postedDate:getFormatedDate(item.time),
                url:item.url?item.url:`https://news.ycombinator.com/item?id=${item.id}`
              }
              return obj;
        })
       let copymetaData=[...metaData];
       copymetaData=[...metaData,...result];
       setMetaData(copymetaData)
       
    }

  }
  const fetchPostIds=async()=>{
        let url=`https://hacker-news.firebaseio.com/v0/jobstories.json`;
        let result = await fetch(url)
        let data=await result.json()
        let ids=data.splice(0,9);
        setPostId(data);
        fetchMetaData(ids);
  }
  
  useEffect(()=>{
    fetchPostIds()
  },[])

  const handleLoadMore=()=>{
     let copyPostId=[...postId];
     let ids=copyPostId.splice(0,9);
     setPostId(copyPostId);
     fetchMetaData(ids);
  }
  return (
    <>
   
    <div className='product-container'>
      {
      metaData.length==0?<h1>Loading.......</h1>:metaData.map((item,index)=>(<div className='item-list'>
      <a className='card' href={item.url} target='_blank'>
      <div className='company-info'>
        {item.jobTitle}
      </div>
      <div className='hiring-info'>
          {item.jobDec}
      </div>
      <div className='item-date'>
      {item.postedDate}
      </div>
      </a>
</div>))
      }
     <button onClick={handleLoadMore}>Load More</button>  
    </div>
     
    </>
  )
}

export default Job