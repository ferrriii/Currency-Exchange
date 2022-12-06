import { useState, useEffect } from 'react';
import ExchangeResults from '../components/exchange-result.js'
import ExchangeHistory from '../components/exchange-rate-history.js'
import ExchangeForm from '../components/exchange-form.js'
import {useLocalHistoryRecords} from '../modules/storage-hook.js'
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
  const {addHistoryRecord} = useLocalHistoryRecords()

  const handleSubmit =  async (amount, fromCurrency, toCurrency) => {
    setError('')
    setAmount(amount)
    setFromCurrency(fromCurrency)
    setToCurrency(toCurrency)
    setLoading(true)
    try {
      const res = await fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`)
      if (!res.ok) throw new Error(res.status);
      const data = await res.json()
      if (!data.info?.rate) throw new Error('Exchange rate is null');
      setExchangeRate(data.info.rate)
      addHistoryRecord({amount, fromCurrency, toCurrency})
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
  }, []) // we just need to run this once, ignore the warning

  return (
    <>
      <h1 className="text-5xl font-bold">I want to convert</h1>

      <ExchangeForm amount={amount} from={fromCurrency} to={toCurrency} isLoading={isLoading} onExchangeCurrency={handleSubmit}/>

      <ExchangeResults amount={amount} from={fromCurrency} to={toCurrency} rate={exchangeRate} error={error}/>

      <ExchangeHistory duration={historicalDuration} onDurationChange={setHistoricalDuration} baseCurrency={fromCurrency} symbol={toCurrency} />
    </>
  );
}