import React, { useState,useEffect } from 'react';
import {Chart} from 'react-google-charts';

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([])

useEffect(() => {
    let tempChartData = props.entryToTrack.map(entry => {
        return [entry.date, entry.weight]
    });
    setChartData(tempChartData);
}, [props.entryToTrack])

    return ( 
    <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
      /> );
}
 
export default EntriesChartTracker;