import './App.css'
import React,{useState,useEffect} from 'react'
import InputBox from './components/InputBox'
import Button from './components/Button'
function App() {

  const [fromAmount,setFromAmount] = useState(0)
  const [toAmount,setToAmount] = useState(0)
  const [fromCurrency,setFromCurrency] = useState('inr')
  const [toCurrency,setToCurrency] = useState('inr')

  function convert(){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurrency}.json`).then((res) => res.json()).then((res) => res[fromCurrency]).then(res => setToAmount(res[toCurrency]*fromAmount))
  }

  useEffect(() => {
    setToAmount(0)
  },[fromCurrency,fromAmount])

  function swap(){
    const temp = toCurrency
    setToCurrency(fromCurrency)
    setFromCurrency(temp)
    setToAmount(0)
  }
  return (
    // <h1 className='text-4xl bg-green-400'>Currency convertor project</h1>
    <div>
    <InputBox label="From" inputDisabled={false} amount={fromAmount} setAmount={setFromAmount} currency={fromCurrency}   setCurrency={setFromCurrency}  />
    {/* <button onClick={swap}>swap</button> */}
    <Button clickhandler={swap} label='Swap'/>
    <InputBox label="To" inputDisabled={true}  amount={toAmount} setAmount={setToAmount} currency={toCurrency}   setCurrency={setToCurrency}/>
    <Button clickhandler={convert} label='Convert'/>
    </div>
  )
}

export default App
