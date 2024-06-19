import React,{useState,useEffect} from 'react'

function InputBox({label,inputDisabled,amount,setAmount,currency,setCurrency}) {

       const [options,setOptions] = useState([])
       useEffect(() => {
              fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/inr.json').then((res) => res.json()).then((res) => res["inr"]).then(res => setOptions(Object.keys(res)))
              
       },[])
       console.log(options)

       function amountChangeHandler(event){
              setAmount(event.target.value)
       }

       function currencyChangeHandler(event){
              setCurrency(event.target.value)
       }
  return (
    <div style={{border:"4px solid black",margin:"20px 5px",padding:"25px",width:"400px",height:"200px",textAlign:"center",backgroundColor:"white"}}>
       <p style={{fontSize:"20px",fontFamily:"cursive"}}>{label}</p>
       <input type="number" className=' border border-black ml-2' disabled={inputDisabled} value={amount} onChange={amountChangeHandler} style={{backgroundColor:"white",margin:"10px",display:"inline-block",width:"200px",fontSize:"30px"}}/>
       <select name='currency' id='currency'  style={{width : "100px",padding:"10px",fontSize:"25px",fontFamily:"cursive"}} value={currency} onChange={currencyChangeHandler}>
              {
                     options.map((ele) => (
                           <option value={ele} key={ele}>{ele}</option> 
                     ))
              }
       </select>
    </div>
  )
}

export default InputBox