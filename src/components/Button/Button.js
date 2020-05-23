import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <a href={onClick} className="Button">
      {buttonText}
    </a>
  );
};

export default Button;
