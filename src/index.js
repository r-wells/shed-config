import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ReactInstance, Location, Surface } from "react-360-web";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot("ConnectedCryptoModel", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  //   r360.compositor.setBackground(
  //     r360.getAssetURL("./static_assets/360_world.jpg")
  //   );
}

window.React360 = { init };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
