import React from "react";
import SelectionComponent from "./SelectionComponent";
import "./SelectionComponentContainer.css";
import Container from "./../../Container/Container";
import Estimate from "./Estimate";

const SelectionComponentContainer = ({ type, clickEvent }) => {
  return (
    <Container classes="SelectionComponentContainer">
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
      <SelectionComponent
        clickEvent={clickEvent}
        label="Label"
        price="$1,000"
        type={type}
      />
    </Container>
  );
};

export default SelectionComponentContainer;
