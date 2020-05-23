import React, { Component } from "react";
import "./Display.css";
import Image from "../Image/Image";
import ImageSelect from "./../ImageSelect/ImageSelect";

class Display extends Component {
  state = {};
  render() {
    return (
      <div className="DisplayContainer">
        <Image />
        {/* <ImageSelect /> */}
      </div>
    );
  }
}

export default Display;
