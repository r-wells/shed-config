import React, { useState } from "react";
import SelectionComponent from "../InnerComponents/SelectionComponent";
import "../InnerComponents/SelectionComponentContainer.css";
import Container from "./../../Container/Container";
import Button from "../../Button/Button";
import { FLOORING_PSF } from "./../../../utils/_DATA";

const SizeContent = ({ data, type, clickEvent, multiple }) => {
  const divs = ["eight", "ten", "twelve"];
  const [displayedDiv, setDisplayedDiv] = useState("eight");

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplayedDiv(e.target.value);
    divs.forEach((div) => {
      const divContainer = document.getElementById(`size-${div}`);
      setDisplayedDiv(divContainer);
    });
    console.log(e.value);
  };

  return (
    <Container classes="SelectionComponentContainer">
      {/* <Container classes="SelectionButtonContainer">
        Filter By Depth
        <Button buttonText={`8'`} classes="ButtonSizeContent" />
        <Button buttonText={`10'`} classes="ButtonSizeContent" />
        <Button buttonText={`12'`} classes="ButtonSizeContent" />
      </Container> */}
      <Container
        id={`size-eight`}
        classes="SelectionComponentMultipleContainers"
      >
        {data[0].options.map((option) => {
          return (
            <SelectionComponent
              key={option.id}
              value={
                option.price
                  ? Number(option.price)
                  : Number(option.price_per_sf)
              }
              clickEvent={() => clickEvent(option)}
              label={option.name}
              price={option.price}
              type={type}
              multiple={multiple}
            />
          );
        })}
      </Container>
      <Container
        id={`size-ten`}
        classes="SelectionComponentMultipleContainers SelectionComponentMultipleContainersNotDisplayed"
      >
        {data[1].options.map((option) => {
          return (
            <SelectionComponent
              key={option.id}
              value={
                option.price
                  ? Number(option.price)
                  : Number(option.price_per_sf)
              }
              clickEvent={clickEvent}
              label={option.name}
              price={option.price}
              type={type}
              multiple={multiple}
            />
          );
        })}
      </Container>
      <Container
        id={`size-twelve`}
        classes="SelectionComponentMultipleContainersNotDisplayed"
      >
        {data[2].options.map((option) => {
          return (
            <SelectionComponent
              key={option.id}
              value={
                option.price
                  ? Number(option.price)
                  : Number(option.price_per_sf)
              }
              clickEvent={clickEvent}
              label={option.name}
              price={option.price_per_sf}
              type={type}
              multiple={multiple}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default SizeContent;
