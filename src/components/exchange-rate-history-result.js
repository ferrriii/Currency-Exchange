import ErrorDisplay from './error.js'
import HistoryTable from './exchange-rate-history-table.js'
import HistoryChart from './exchange-rate-history-chart.js'
import ExchangeRateHistoryStat from './exchange-rate-history-stat.js'

export default function ExchangeRateHistoryResults({exchangeRateHistory, viewType = 'Table', error}) {
  if (error) {
    return (
      <div className="flex space-x-3 py-3">
        <ErrorDisplay error={error} />
      </div>
    )
  }

  let view
  if (viewType === 'Table') {

    function compare( a, b ) {
      if ( b.date < a.date ){
        return -1;
      }
      if ( b.date > a.date ){
        return 1;
      }
      return 0;
    }
    let reverseHistory = [...exchangeRateHistory]
    reverseHistory.sort(compare)

    view = <HistoryTable data={reverseHistory}/>
  } else {
    view = <HistoryChart data={exchangeRateHistory}/>
  }

  return (
    <div className="flex space-x-3 py-3">
      <div className="w-1/2 relative">{view}</div>
      <div className="w-1/2"><ExchangeRateHistoryStat data={exchangeRateHistory}/></div>
    </div>
  )
}