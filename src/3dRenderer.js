import React from "react";
import { Animated, asset, AppRegistry, View } from "react-360";
import Entity from "Entity";

export default class CryptoModel extends React.Component {
  rotations = {
    BTC: {
      rotateX: 90,
      rotateY: 0,
      rotateZ: this.state.rotation,
    },
    DASH: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
    XMR: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
    ZEN: {
      rotateX: 0,
      rotateY: this.state.rotation,
      rotateZ: 0,
    },
  };

  bounce({ value, initial, toValue, friction }) {
    value.setValue(initial);

    Animated.spring(value, {
      toValue,
      friction,
    }).start();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.crypto !== nextProps.crypto) {
      const cryptoConfig = {
        value: this.state.bounce,
        initial: 0.1,
        toValue: 0.5,
        friction: 5,
      };

      this.bounce(cryptoConfig);
    }
  }

  render() {
    console.log(`models/${this.props.crypto}.obj`);
    return (
      <View>
        <Entity
          source={{
            obj: asset(`models/BTC.obj`),
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("CryptoModel", () => CryptoModel);
