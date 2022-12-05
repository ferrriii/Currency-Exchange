import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Form({amount: initialAmount, from, to, onExchangeCurrency, isLoading}) {
  const [amount, setAmount] = useState(initialAmount || '');
  const [fromCurrency, setFromCurrency] = useState(from || '');
  const [toCurrency, setToCurrency] = useState(to || '');

  const handleSubmit =  async (event) => {
    event.preventDefault();
    onExchangeCurrency(amount, fromCurrency, toCurrency)
  }

  const swapCurrencies= () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <form className="flex justify-between my-10" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Amount" variant="standard" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <TextField id="standard-basic" label="From" variant="standard" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}/>
      <IconButton aria-label="swap" onClick={swapCurrencies}>
        <CompareArrowsIcon color="primary" />
      </IconButton>
      <TextField id="standard-basic" label="To" variant="standard" value={toCurrency} onChange={(e) => setToCurrency(e.target.value.toUpperCase())}/>
      <Button disabled={isLoading} type="submit" variant="contained">CONVERT</Button>
    </form>    
  )
}