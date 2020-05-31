import React, { Component } from "react";
import "./Display.css";
// import Image from "../Image/Image";
import Image from "../../images/cementboard.png";

class Display extends Component {
  state = {};
  render() {
    return (
      <div className="DisplayContainer">
        <img src={Image} />
      </div>
    );
  }
}

export default Display;
