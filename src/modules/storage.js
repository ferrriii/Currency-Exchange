let records = JSON.parse(localStorage.getItem("exchange_currency_history_records")) || []

export function loadHistoryRecords() {
    return records
}

function persistHistoryRecords() {
    localStorage.setItem("exchange_currency_history_records", JSON.stringify(records))
}

export function addHistoryRecord(record) {
    records.push({date: Date.now(), ...record})
    persistHistoryRecords()
}

export function deleteHistoryRecord(id) {
    const index = records.findIndex(record => record.date === id)
    if (index === -1) return false
    records.splice(index, 1)
    persistHistoryRecords()
    return true
}