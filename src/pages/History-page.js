import { useState, useEffect } from 'react';
import {Table, TableHead, TableColumns, TableRows } from '../components/table.js'
import DeleteIcon from '@mui/icons-material/DeleteForever';
import ViewIcon from '@mui/icons-material/RemoveRedEye';
import {loadHistoryRecords, deleteHistoryRecord} from '../modules/storage.js'
import { useNavigate  } from "react-router-dom";

export function History() {
  const navigate  = useNavigate()

  const [historyRecords, setHistoryRecords] = useState([])

  useEffect(()=> {
    // load history from local storage
    setHistoryRecords([...loadHistoryRecords()])
  }, [])


  const deleteRecord = recordId => {
    deleteHistoryRecord(recordId)
    setHistoryRecords([...loadHistoryRecords()])
  }

  const viewRecord = ({fromCurrency, toCurrency, amount}) => {
    navigate(`/${fromCurrency}/${toCurrency}/${amount}`)
  }

  const createAction = (record) => {
    if (!record) return []
    let deleteAction = <label className="text-warn cursor-pointer invisible group-hover:visible" key={'del-' + record.date} onClick={() => deleteRecord(record.date)}><DeleteIcon color="warn"/> Delete from history</label>
    let viewAction = <label className="text-primary cursor-pointer invisible group-hover:visible" key={'view-' + record.date} onClick={() => viewRecord(record)}><ViewIcon color="primary"/> View</label>
    return [viewAction, deleteAction]
  }

  const recordDate = record => {
    let date = new Date(record.date)
    return date.toLocaleDateString() + ' @ ' + date.toLocaleTimeString()
  }

  const recordEvent = record => `Converted an amount of ${record.amount} ${record.fromCurrency} to ${record.toCurrency}`

  let rows = historyRecords.map(record => 
    <TableColumns cols={[recordDate(record), recordEvent(record), ...createAction(record)]} key={record.date} />
  )

  return (
    <>
      <h1 className="text-5xl font-bold">Conversion History</h1>

      <Table className="my-10">
        <TableHead headings={['Date', 'Event', 'Actions', '']}/>
        <TableRows className="group">
          {rows}
        </TableRows>
      </Table>
    </>
 );
}