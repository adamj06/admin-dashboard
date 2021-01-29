import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Chart(props) {
  function formatXAxis(tickItem) {
    try {
      return tickItem.toLocaleDateString();
    }
    catch (err) {
      return "No Data";
    }
  }

  function filterData(data, days) {
    return data.filter(item => item.date.getTime() >= (new Date().getTime() - (86400000 * days)));
  }

  const data = filterData(props.data, props.days);

  return (
    <div className="chart-container">
      <h3>{props.name}</h3>
      <div className="recharts-wrapper">
      <ResponsiveContainer width="95%" height={400}>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" tickFormatter={formatXAxis}/>
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
