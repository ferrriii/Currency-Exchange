import ErrorDisplay from './error.js'
import HistoryTable from './exchange-rate-history-table.js'
import ExchangeRateHistoryStat from './exchange-rate-history-stat.js'

export default function ExchangeRateHistoryResults({exchangeRateHistory, error}) {
  if (error) {
    return (
      <div className="flex space-x-3 py-3">
        <ErrorDisplay error={error} />
      </div>
    )
  }

  return (
    <div className="flex space-x-3 py-3">
      <div className="w-1/2 relative"><HistoryTable data={exchangeRateHistory}/></div>
      <div className="w-1/2"><ExchangeRateHistoryStat data={exchangeRateHistory}/></div>
    </div>
  )
}