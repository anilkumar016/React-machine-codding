import React,{useState} from 'react'
import './Cal.css';
function CalculatorCmp() {
    const [value,setValue]=useState('');
    let arr=['1','2','3','4','5','6','7','8','9','0','+','-','/','*','C','%','=','.'];
    const handleInput=(e)=>{
        let val=e.target.value;
        setValue(val);
    }
    const handleClick=(e)=>{
        let btnVal=e.target.value;
       if(btnVal==='C'){
        setValue('');
       }else if(btnVal==='='){
        handleSubmit();
       }else{
        setValue(prevVal=>prevVal+btnVal)
       }
    }
    const handleSubmit = (e) => {
       
        e?.preventDefault();
        console.log('Anil');
        try {
          const ans = eval(value);
          setValue(ans);
        } catch (err) {
          alert("Invalid Inputs")
        }
      }
    console.log(value);
    return (
        <div>
            
            <div className='cal-container'>
                
                    <div className='row-input'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' id='name' value={value} onChange={handleInput}/>
                        </form>
                    </div>
                
                <div className='row-btn'
                     onClick={handleClick}
                >
                   {
                    arr.map((btb,index)=>{
                        return (<button
                        value={btb}
                        key={index}
                        >{btb}</button>
                        )
                    })
                   }
                </div>
                
            </div>
        </div>
    )
}

export default CalculatorCmp