import React from "react";
import SelectionComponent from "./SelectionComponent";
import "./SelectionComponentContainer.css";
import Container from "./../../Container/Container";
import Estimate from "./Estimate";
import { getInitialData, getPricingOptions } from "../../../utils/api";

const SelectionComponentContainer = ({ type, clickEvent }) => {
  console.log("type", type);
  const data = getInitialData(type);
  console.log("data", data);

  return (
    <Container classes="SelectionComponentContainer">
      {data.map((option) => {
        return (
          <SelectionComponent
            key={option.id}
            clickEvent={clickEvent}
            label={option.name}
            price={option.price}
            type={type}
          />
        );
      })}
    </Container>
  );
};

export default SelectionComponentContainer;
