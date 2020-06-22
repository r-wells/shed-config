import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick, classes }) => {
  return (
    <a href={onClick} className={classes}>
      {buttonText}
    </a>
  );
};

export default Button;
