// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from "react-360-web";

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
