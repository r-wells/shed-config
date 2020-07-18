import React, { useState } from "react";
import Container from "../../Container/Container";
import "./ExteriorContent.css";
import Button from "../../Button/Button";
import ExteriorInnerContent from "./ExteriorInnerContent";

const ExteriorContent = ({ clickEvent, data }) => {
  const [displayedSide, setDisplayedSide] = useState("Front");

  const sides = ["Front", "Back", "Left", "Right"];

  const changeDisplayedSide = (side) => {
    setDisplayedSide(side);
  };

  return (
    <Container>
      <Container classes="ExteriorButtonContainer">
        {sides.map((side) => {
          return (
            <Button
              onClick={() => changeDisplayedSide(side)}
              classes="ExteriorButton"
              buttonText={side}
            />
          );
        })}
      </Container>
      <Container classes="ExteriorInnerContentContainer">
        <ExteriorInnerContent data={data} displayedSide={displayedSide} />
      </Container>
    </Container>
  );
};

export default ExteriorContent;
