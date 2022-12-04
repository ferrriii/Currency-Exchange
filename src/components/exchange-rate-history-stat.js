import {Table, TableHead, TableColumns, TableRows } from './table.js'

export default function ExchangeRateHistoryStat({data}) {

  const stat = data.reduce((total, current) => {
    total.sum += current.rate
    total.min = Math.min(total.min, current.rate)
    total.max = Math.max(total.max, current.rate)
    return total
  }, {sum:0, min:Infinity, max:0})

  const records = data.map(({date,rate}) => 
    <TableColumns cols={[date, rate]} key={date} />
  )
  return (
    <Table>
      <TableHead headings={['Statistics', '']}/>
      <TableRows>
        <TableColumns cols={['Lowest', stat.min]} />
        <TableColumns cols={['Highest', stat.max]} />
        <TableColumns cols={['Average', (stat.sum / data.length).toFixed(6)]} />
      </TableRows>
    </Table>
  )
}