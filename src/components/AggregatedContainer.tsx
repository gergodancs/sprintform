import React from "react";
import AggregatedSpends from "./AggregatedSpends";
import { Chart } from "./Chart";

const AggregatedContainer = () => {
  return (
    <div className="aggregated-container">
      <AggregatedSpends />
      <Chart />
    </div>
  );
};

export default AggregatedContainer;
