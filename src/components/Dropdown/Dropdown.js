import React, { useState } from "react";
import "./Dropdown.css";
import DropdownContent from "../DropdownContent/DropdownContent";
import Size from "../DropdownContent/InnerComponents/Size";
import Interior from "./../DropdownContent/InnerComponents/Interior";
import Colors from "./../DropdownContent/InnerComponents/Colors";
import Estimate from "./../DropdownContent/InnerComponents/Estimate";
import Services from "./../DropdownContent/InnerComponents/Services";
import Siding from "./../DropdownContent/InnerComponents/Siding";
import Exterior from "./../DropdownContent/InnerComponents/Exterior";

const Dropdown = ({ innerText, type }) => {
  const [display, setDisplay] = useState(false);
  const displayedContent = {
    Size: <Size />,
    Interior: <Interior />,
    Colors: <Colors />,
    Estimate: <Estimate />,
    Services: <Services />,
    Siding: <Siding />,
    Exterior: <Exterior />,
  };

  return (
    <div>
      <a onClick={() => setDisplay(!display)} className="Dropdown">
        <p>{innerText}</p>
        <span style={{ fontSize: "24px" }}>{display ? "x" : "+"}</span>
      </a>
      <DropdownContent display={display}>
        <p>{displayedContent[type]}</p>
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
