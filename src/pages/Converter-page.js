import { useState, useEffect } from 'react';
import ExchangeResults from '../components/exchange-result.js'
import ExchangeHistory from '../components/exchange-rate-history.js'
import ExchangeForm from '../components/exchange-form.js'
import {addHistoryRecord} from '../modules/storage.js'
import { useParams } from 'react-router-dom';

export function Converter() {
  let params = useParams();
  const [amount, setAmount] = useState(params.amount);
  const [fromCurrency, setFromCurrency] = useState(params.from);
  const [toCurrency, setToCurrency] = useState(params.to);
  const [isLoading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [error, setError] = useState('');
  const [historicalDuration, setHistoricalDuration] = useState(7)

  const handleSubmit =  async (amount, fromCurrency, toCurrency) => {
    setError('')
    setAmount(amount)
    setFromCurrency(fromCurrency)
    setToCurrency(toCurrency)
    console.log('convert', amount, fromCurrency, toCurrency)
    setLoading(true)
    try {
      const res = await fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`)
      const data = await res.json()
      setExchangeRate(data.info.rate)
      addHistoryRecord({amount, fromCurrency, toCurrency})
      console.log(data, data.info.rate)  
    } catch (e) {
      console.log('error', e)
      setError(e.message || e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() =>{
    if (amount && fromCurrency && toCurrency) {
      handleSubmit(amount, fromCurrency, toCurrency)
    }  
  }, [])

  return (
    <>
      <h1 className="text-5xl font-bold">I want to convert</h1>

      <ExchangeForm amount={amount} from={fromCurrency} to={toCurrency} isLoading={isLoading} onExchangeCurrency={handleSubmit}/>

      <ExchangeResults amount={amount} from={fromCurrency} to={toCurrency} rate={exchangeRate} error={error}/>

      <ExchangeHistory duration={historicalDuration} onDurationChange={setHistoricalDuration} baseCurrency={fromCurrency} symbol={toCurrency} />
    </>
  );
}