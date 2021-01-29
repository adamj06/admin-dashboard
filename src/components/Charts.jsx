import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import sales from "./data/sales";

function Charts() {
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

  // Define data
  const sales90 = filterData(sales, 90);
  const sales30 = filterData(sales, 30);

  return(
    <div>
      <div className="chart-container">
        <h3>Sales (Lifetime)</h3>
        <div className="recharts-wrapper">
        <ResponsiveContainer width="95%" height={400}>
          <LineChart width={600} height={300} data={sales}>
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" tickFormatter={formatXAxis}/>
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="chart-container">
        <h3>Sales (90 Days)</h3>
        <div className="recharts-wrapper">
        <ResponsiveContainer width="95%" height={400}>
          <LineChart width={600} height={300} data={sales90}>
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" tickFormatter={formatXAxis}/>
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="chart-container">
        <h3>Sales (30 Days)</h3>
        <div className="recharts-wrapper">
        <ResponsiveContainer width="95%" height={400}>
          <LineChart width={600} height={300} data={sales30}>
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" tickFormatter={formatXAxis}/>
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
