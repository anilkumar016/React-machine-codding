import React, { useEffect, useState } from 'react'
import './Crypo.css'
function CryptoCmp() {
    const arr = ['usd', 'eur', 'gbp', 'cny', 'jpy'];
    const [currency,setCurrency]=useState(0);
    const [selectedCurrency,setSelectedCurrency]=useState('usd');
    const [convertedCurrency,setConvertedCurrency]=useState(0);
    const [diff,setDiff]=useState(0);
    const [isUp,setIsUp]=useState(false);

    const handleValue=(e)=>{
        setCurrency(e.target.value);
    }
    const handleSelect=(e)=>{
        setSelectedCurrency(e.target.value);
    }
    const getCurrencyData=async ()=>{
        let url=`https://api.frontendeval.com/fake/crypto/${selectedCurrency}`;
        let result = await fetch(url);
        let data = await result.json(); 
        let currVal=data.value; 
        let conCurrency=currency*currVal;
        let prevVal=window.sessionStorage.getItem('prevVal');
        let d=prevVal-conCurrency; 
        setDiff(d);
        setConvertedCurrency(conCurrency.toFixed(2));
        d<0?setIsUp(false):setIsUp(true);
        window.sessionStorage.setItem('prevVal',conCurrency.toFixed(2));

    }
    useEffect(()=>{
        let timer;
        if(currency>0){
            timer= setInterval(()=>{
                getCurrencyData();
            },2000);
        }

        return ()=>{
            clearInterval(timer);
        }
        
    },[currency,selectedCurrency])
    return (
        <div className='parent'>
            <div className='row'>
                <input className='input-row' type='text' id='curreny_value' onChange={handleValue} />
                <select className='input-row' onChange={handleSelect}>
                    {
                    arr.map(item=>(<option value={item}>{item.toUpperCase()}</option>))
                    }
                  
                </select>

            </div>
            <div className='list-row'>
                <span>{convertedCurrency}</span>
                <span>WUC</span>
              
                <span className={`${isUp?'up':'down'}`}>{isUp ? '↑' : '↓'} {diff.toFixed(2)}</span>
            </div>

        </div>
    )
}

export default CryptoCmp