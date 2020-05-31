import React from "react";
import "./Container.css";

const Container = ({ children, style, classes }) => {
  return (
    <div id="Container" style={style} className={classes}>
      {children}
    </div>
  );
};

export default Container;
