import React from "react";
import "./SelectionComponent.css";
import Image from "../../../images/selection-component-square.png";

const SelectionComponent = ({
  type,
  label,
  price,
  clickEvent,
  selectedValue,
}) => {
  return (
    <div className="SelectionComponent">
      <img src={Image} />
      <label className="SelectionComponentLabel">{label}</label>
      <input
        type="radio"
        name={type}
        value="1000"
        // checked={displayChecked}
        onClick={clickEvent}
      />
      <p className="SelectionComponentPrice">{price}</p>
    </div>
  );
};

export default SelectionComponent;
