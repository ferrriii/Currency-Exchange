import { useState, useEffect } from 'react';
import ExchangeRateHistoryResults from './exchange-rate-history-result.js'
import ExchangeRateHistoryControl from './exchange-rate-history-control.js'

function dateString(date) {
  return date.getFullYear() + "-" + String(date.getMonth()+1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
}

export default function Menu({duration, onDurationChange, baseCurrency, symbol}) {

  const [historicalView, setHistoricalView] = useState('Table')
  const [exchangeRateHistory, setExchangeRateHistory] = useState([])
  const [error, setError] = useState('')

  const getExchangeRateHistory = async function() {
    try {
      const today = new Date()
      const startDate =  new Date(today - (1000*60*60*24*duration))
      const res = await fetch(`https://api.exchangerate.host/timeseries?start_date=${dateString(startDate)}&end_date=${dateString(today)}&base=${baseCurrency}&symbols=${symbol}`)
      const data = await res.json()
      const HistoryData = Object.keys(data.rates).map(date => ({date, rate: data.rates[date][symbol]}))
      console.log(data, data.rates, HistoryData)
      setExchangeRateHistory(HistoryData)
    } catch (e) {
      console.log('error', e)
      setError(e.message || e)
    }
  }

  useEffect(()=> {
    if (!symbol) return
    getExchangeRateHistory()
  }, [duration, baseCurrency, symbol])

  if (!symbol) return null

  return (
      <div className="py-6 mt-3 border-t-2 border-neutral-200">
      <h2 className="text-2xl font-bold">Exchange History</h2>
      <div className="flex flex-col mt-5">
        <ExchangeRateHistoryControl duration={duration} onDurationChange={onDurationChange} historicalView={historicalView} setHistoricalView={setHistoricalView} />
        <ExchangeRateHistoryResults exchangeRateHistory={exchangeRateHistory} viewType={historicalView} error={error}/>
      </div>
    </div>
  )
}