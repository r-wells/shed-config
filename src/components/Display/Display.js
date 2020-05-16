import React, { Component } from "react";
import Title from "../Title/Title";
import Image from "../Image/Image";

class Display extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Title titleText="Mod Shed Configurator" />
        <Image />
      </React.Fragment>
    );
  }
}

export default Display;
