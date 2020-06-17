import React from "react";
import ReactDOM from "react-dom";
import TrackballControls from "./TrackballControls";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";

class ThreeRenderer extends Component {
  componentDidMount() {}

  render() {
    return <div id="three-container"></div>;
  }
}

export default ThreeRenderer;
