import React from "react";
import "./SelectionComponent.css";
import Image from "../../../images/selection-component-square.png";

const SelectionComponent = ({ label, price }) => {
  return (
    <div className="SelectionComponent">
      <img src={Image} />
      <label className="SelectionComponentLabel">{label}</label>
      <input type="radio" />
      <p className="SelectionComponentPrice">{price}</p>
    </div>
  );
};

export default SelectionComponent;
