import React from "react";

const ExteriorInnerContent = ({ displayedSide, clickEvent, data }) => {
  console.log("data", data);
  return <div>{displayedSide}</div>;
};

export default ExteriorInnerContent;
