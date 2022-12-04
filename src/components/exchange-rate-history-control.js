import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function exchangeRateHistoryControl({duration, onDurationChange, historicalView, setHistoricalView}) {
  return (
    <div className="w-1/2 flex justify-between items-end">
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={duration}  onChange={e => onDurationChange(e.target.value)}  label="Duration">
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={14}>14 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
        </Select>
        </FormControl>
      </div>
      <div>
      <RadioGroup row value={historicalView} onChange={e => setHistoricalView(e.target.value)} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        <FormControlLabel value="Table" control={<Radio />} label="Table" />
        <FormControlLabel value="Chart" control={<Radio />} label="Chart" />
      </RadioGroup>
      </div>
    </div>
  )
}