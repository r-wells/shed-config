import React from "react";

const Container = ({ children, style, classes }) => {
  return (
    <div id="Container" style={style} className={classes}>
      {children}
    </div>
  );
};

export default Container;
