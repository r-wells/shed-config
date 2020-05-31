import React, { useState } from "react";

const Estimate = ({ estimateValue }) => {
  console.log("estimateValue", estimateValue);
  return (
    <div>
      Your Estimate is:{" "}
      <span style={{ fontWeight: "bold" }}>${estimateValue}</span>
    </div>
  );
};

export default Estimate;
