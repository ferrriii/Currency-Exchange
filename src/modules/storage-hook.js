import React, { useState, useEffect } from 'react';

export function useLocalHistoryRecords() {
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("exchange_currency_history_records")) || []);

    useEffect(() =>{
        // persist in local storage
        localStorage.setItem("exchange_currency_history_records", JSON.stringify(records))
    }, [records])


    function addHistoryRecord(record) {
        setRecords([{date: Date.now(), ...record}, ...records])
    }

    function deleteHistoryRecord(id) {
        const index = records.findIndex(record => record.date === id)
        if (index === -1) return false
        let arr = [...records]
        arr.splice(index, 1)
        setRecords(arr)
        return true
    }

    return {
        records,
        addHistoryRecord,
        deleteHistoryRecord
    }
}