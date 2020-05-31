import React, { useState } from "react";
import "./Dropdown.css";
import DropdownContent from "../DropdownContent/DropdownContent";
import Estimate from "./../DropdownContent/InnerComponents/Estimate";
import SelectionComponentContainer from "./../DropdownContent/InnerComponents/SelectionComponentContainer";

const Dropdown = ({ innerText, type, clickEvent, estimateValue }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div style={{ overflowWrap: "break-word" }}>
      <a onClick={() => setDisplay(!display)} className="DropdownLink">
        <p>{innerText}</p>
        <span style={{ fontSize: "24px" }}>{display ? "x" : "+"}</span>
      </a>
      <DropdownContent display={display}>
        {type === "Estimate" ? (
          <Estimate estimateValue={estimateValue} />
        ) : (
          <SelectionComponentContainer type={type} clickEvent={clickEvent} />
        )}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
