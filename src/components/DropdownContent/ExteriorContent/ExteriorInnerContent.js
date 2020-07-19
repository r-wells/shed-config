import React from "react";
import Container from "../../Container/Container";

const ExteriorInnerContent = ({ displayedSide, clickEvent, data }) => {
  console.log("data", data);
  return (
    <Container classes="SelectionComponentContainer">{displayedSide}</Container>
  );
};

export default ExteriorInnerContent;
