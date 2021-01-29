import React from "react";
import Chart from "./Chart";
import sales from "./data/sales";

function Charts() {
  return(
    <div>
      <Chart name="Sales (Lifetime)" data={sales} days="10950" />
      <Chart name="Sales (90 Days)" data={sales} days="90" />
      <Chart name="Sales (30 Days)" data={sales} days="30" />
      <Chart name="Sales (Week)" data={sales} days="7" />
    </div>
  );
}

export default Charts;
