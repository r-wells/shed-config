import React from "react";
import Container from "./../../Container/Container";
import SelectionComponent from "./SelectionComponent";

const Services = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <SelectionComponent label="Label" price="$1,000" />
      <SelectionComponent label="Label" price="$1,000" />
      <SelectionComponent label="Label" price="$1,000" />
      <SelectionComponent label="Label" price="$1,000" />
      <SelectionComponent label="Label" price="$1,000" />
      <SelectionComponent label="Label" price="$1,000" />
    </Container>
  );
};

export default Services;
