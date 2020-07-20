import React from "react";
import Image from "../../../images/selection-component-square.png";
import "../InnerComponents//SelectionComponentContainer.css";
// import images from "../../../assets/eight";

const ExteriorSelectionComponent = ({
  type,
  label,
  price,
  clickEvent,
  value,
  multiple,
  perSquareFoot,
  updateSizing,
  size,
}) => {
  const setSizing = (size) => {
    updateSizing(size);
  };

  const Image = `http://localhost:3000/src/assets/${size}${label}.png`;

  return (
    <div className="SelectionComponent">
      <img src={Image} />
      <label className="SelectionComponentLabel">{label}</label>

      <input
        type="radio"
        name={type}
        value={value}
        onClick={() => clickEvent(type, 400)}
      />
      {/* <p className="SelectionComponentPrice">${price}</p> */}
    </div>
  );
};

export default ExteriorSelectionComponent;
