import React, { useEffect, useState } from 'react'
import './Sorting.css'
function SortingCmp() {
   const [products,setProducts]=useState([])
   const [orderBy,setOrderBY]=useState('asc');
   
    const getData=async()=>{
        let URL = `https://api.escuelajs.co/api/v1/products`
        let result = await fetch(URL)
        let data = await result.json()
        setProducts(data)
    }
    const handleSorting=(col)=>{
       if(orderBy==='asc'){
            let copyproducts=[...products];
           let productSorted=copyproducts.sort((a,b)=>{
                return a[col]<b[col]?1:-1
            })
            setProducts(productSorted)
            setOrderBY('desc')
       }
       if(orderBy==='desc'){
            let copyproducts=[...products];
            let productSorted=copyproducts.sort((a,b)=>{
                return a[col]>b[col]?1:-1
            })
            setProducts(productSorted)
            setOrderBY('asc')
       }
    }
    useEffect(()=>{
        getData()
    },[])
  
    return (
        <div>
            <table style={{width:'100%'}}>
                <tr>
                    <th width="10%" onClick={()=>handleSorting('id')}>ID</th>
                    <th width="70%" onClick={()=>handleSorting('title')}>Name</th>
                    <th width="20%" onClick={()=>handleSorting('price')}>Price</th>
                </tr>

                {
                    products&&products.map((item,idx)=>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
               
            </table>
        </div>
    )
}

export default SortingCmp