import {Table, TableHead, TableColumns, TableRows } from './table.js'

export default function HistoryTable({data}) {
  const records = data.map(({date,rate}) => 
    <TableColumns cols={[date, rate]} key={date} />
  )
  return (
    <Table>
      <TableHead headings={['Date', 'Exchange Rate']}/>
      <TableRows>
        {records}
      </TableRows>
    </Table>
  )
}