import React, { useEffect, useState } from 'react'
import './Shopping.css'
function ShoppingList() {
    const [food,setFood]=useState('');
    const [shoppingList,setShoppingList]=useState([]);
    const [shopingListItem,setShoppingListItem]=useState([]);
    const handleInput=(e)=>{
        setFood(e.target.value);
    }
    const fetchFoodData=async (fd)=>{
        let url=`https://api.frontendeval.com/fake/food/${fd}`;
        let result = await fetch(url);
        let data= await result.json();
        setShoppingList(data)
    }
    const handleShopingList=(e)=>{
       let idx=e.target.getAttribute('data-id');
       let obj={
            id:Date.now(),
            name:shoppingList[idx],
            isDone:false
       }
       let copyshopingListItem=[...shopingListItem];
       copyshopingListItem.push(obj);
       setShoppingListItem(copyshopingListItem);
       setFood('');
    }
    useEffect(()=>{
        if(food.length>=2){
            fetchFoodData(food);
        }
    },[food])

    const handleDelete=(id)=>{
        let copyshopingListItem=[...shopingListItem];
        let temData=copyshopingListItem.filter(item=>item.id !==id)
        setShoppingListItem(temData);
    }
    const handleStrke=(id)=>{
        let copyshopingListItem=[...shopingListItem];
        let temData=copyshopingListItem.map(itm=>{
            if(itm.id===id){
               return {...itm,isDone:!itm.isDone} 
            }
            return itm;
        })
        setShoppingListItem(temData);
    }

  return (
    <div className='shopping-list'>
        <div className='row'>
            <input type='text' name='search' onChange={handleInput} value={food} />
        </div>
        {
            food?<div className='row-autocomple'
            onClick={handleShopingList}
         >
             {shoppingList&&shoppingList.map((item,index)=>(
             <div className='list-item' data-id={index} key={index}>{item}</div>
             ))}
             
         </div>:null
        }
        
      <div className='row-list'>
            {
                shopingListItem && shopingListItem.map((item,idx)=>(<div className={`shop-list-item ${item.isDone?'strike':''}` }>
                <button onClick={()=>handleStrke(item.id)}>✓</button>
                {item.name}
                <button onClick={()=>handleDelete(item.id)}>X</button>
            </div>)) 
            }
             
            
        </div>
       
    </div>
  )
}

export default ShoppingList