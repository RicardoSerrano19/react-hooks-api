import { useState } from 'react'
import './App.css'

const MoneyForm = () => {
  const [buyPrice, setBuyPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [ROE, setROE] = useState(0);

  const handleBuyPriceChange = (event) => {
    setBuyPrice(event.target.value);
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const handleSellPriceChange = (event) => {
    setSellPrice(event.target.value);
  }

  const calculateROE = (event) =>{
    event.preventDefault();
    const coins = quantity / buyPrice;
    const total = coins * sellPrice;
    setTotal(Math.round(total))
    setROE(Math.round(total - quantity))
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencySign: 'accounting',
      signDisplay: 'always'
    }).format(number);
  }

  return (
    <form>
      <div>
        <label htmlFor='buyPrice'>Buy Price</label>
        <input type="number" onChange={handleBuyPriceChange} name="buyPrice" id=""/>
      </div>
      <div>
        <label htmlFor='quantity'>Quantity</label>
        <input type="number" onChange={handleQuantityChange} name="quantity" id=""/>
      </div>
      <div>
        <label htmlFor='sellPrice'>Sell Price</label>
        <input type="number" onChange={handleSellPriceChange} name="sellPrice" id=""/>
      </div>
      <div>
        <button onClick={calculateROE}>Calculate</button>
      </div>
      <div>
        Total: <strong>{formatNumber(total)}</strong>
      </div>
      <div>
        ROE: <strong>{formatNumber(ROE)}</strong>
      </div>
    </form>
  )
}
function App() {
  return (
    <div className='App'>
      <MoneyForm />
    </div>
  )
}

export default App
