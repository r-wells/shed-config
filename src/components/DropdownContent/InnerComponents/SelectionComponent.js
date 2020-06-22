import React from "react";
import "./SelectionComponent.css";
import Image from "../../../images/selection-component-square.png";

const SelectionComponent = ({
  type,
  label,
  price,
  clickEvent,
  value,
  multiple,
  perSquareFoot,
}) => {
  return (
    <div className="SelectionComponent">
      <img src={Image} />
      <label className="SelectionComponentLabel">{label}</label>
      {multiple ? (
        <input
          type="checkbox"
          name={type}
          value={value}
          onClick={(e) => clickEvent(e, perSquareFoot)}
        />
      ) : (
        <input
          type="radio"
          name={type}
          value={value}
          onClick={(e) => clickEvent(e, perSquareFoot)}
        />
      )}
      <p className="SelectionComponentPrice">${price}</p>
    </div>
  );
};

export default SelectionComponent;
