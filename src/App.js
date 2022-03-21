import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './app.css'

function App() {

  const [entries, setEntries] = useState([{ weight: 175, date: '11-23-2021' }, { weight: 176, date: '11-24-2021' }, { weight: 174, date: '11-25-2021' }, { weight: 172, date: '11-26-2021' }])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries)
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker entryToTrack={entries} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
