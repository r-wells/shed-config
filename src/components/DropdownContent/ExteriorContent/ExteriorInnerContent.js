import React, { useState } from "react";
import Container from "../../Container/Container";
import ExteriorSelectionComponent from "./ExteriorSelectionComponent";
import "./ExteriorContent.css";
import Button from "./../../Button/Button";

const ExteriorInnerContent = ({
  displayedSide,
  clickEvent,
  data,
  type,
  size,
}) => {
  const [displayedData, setDisplayedData] = useState();
  // console.log("data", data);

  const setDisplayedItems = () => {
    // console.log("engage in setDisplayedItems");
  };
  return (
    <Container>
      <Container classes="SelectionComponentContainer">
        {data.map((option) => {
          return (
            <ExteriorSelectionComponent
              key={option.image}
              value={400}
              clickEvent={clickEvent}
              label={option.image}
              type={type}
              multiple={false}
              size={size}
            />
          );
        })}
      </Container>
      <Container classes="ExteriorInnerContentPaginationContainer">
        <Button
          onClick={setDisplayedItems}
          value="prev"
          classes="ExteriorInnerContentPaginationButton"
          buttonText={"<"}
        />
        <Button
          onClick={setDisplayedItems}
          value="next"
          classes="ExteriorInnerContentPaginationButton"
          buttonText={">"}
        />
      </Container>
    </Container>
  );
};

export default ExteriorInnerContent;
