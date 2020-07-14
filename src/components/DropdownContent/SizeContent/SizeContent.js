import React, { useState } from "react";
import SelectionComponent from "../InnerComponents/SelectionComponent";
import "../InnerComponents/SelectionComponentContainer.css";
import Container from "./../../Container/Container";
import { FLOORING_PSF } from "./../../../utils/_DATA";

const SizeContent = ({ data, type, clickEvent, multiple, setPriceEvent }) => {
  return (
    <Container classes="SelectionComponentContainer">
      {data.map((option) => {
        return (
          <SelectionComponent
            key={option.id}
            value={
              option.price ? Number(option.price) : Number(option.price_per_sf)
            }
            clickEvent={() =>
              clickEvent(option.totalSquareFootage, FLOORING_PSF)
            }
            label={option.name}
            price={option.price_per_sf * option.totalSquareFootage}
            type={type}
            multiple={multiple}
          />
        );
      })}
    </Container>
  );
};

export default SizeContent;
