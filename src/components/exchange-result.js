import ErrorDisplay from './error.js'

export default function ExchangeResults({amount, from, to, rate, error}) {
  if (error) {
    return (
      <ErrorDisplay error={error} />
    )
  }

  // if rate is undefined do not display anything
  if (!rate) return null
  return (
      <div className="pt-6 pb-8  text-center">
        <div className="text-5xl mb-5">{amount} {from} = <span className="text-accent">{amount * rate} {to}</span></div>
        <div>1 {from} = {rate} {to}</div>
        <div>1 {to} = {(1/rate).toFixed(7)} {from}</div>
      </div>
  )
}  