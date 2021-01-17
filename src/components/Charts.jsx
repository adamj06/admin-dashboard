import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import sales from "./data/sales";

function Charts() {
  return(
    <div className="chart-container">
      <h3>Sales (All)</h3>
      <div className="recharts-wrapper">
      <ResponsiveContainer width="95%" height={400}>
        <LineChart width={600} height={300} data={sales}>
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
