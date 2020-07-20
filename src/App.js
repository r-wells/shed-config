import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

class App extends Component {
  state = {
    inputTypes: [
      "Sizing",
      "Interior",
      "Exterior",
      "Siding",
      "Colors",
      "Services",
    ],
    totalSquareFootage: 0,
    types: {
      Sizing: 0,
      Interior: 0,
      Exterior: 0,
      Siding: 0,
      Colors: 0,
      Services: 0,
    },
    estimate: 0,
    sizing: "eight",
  };

  setEstimate = () => {
    const types = this.state.types;
    // console.log("types", types);
    let estimate = 0;
    for (let type in types) {
      estimate += types[type];
    }
    this.setState(
      {
        estimate,
      },
      () => console.log("this.state", this.state)
    );
  };

  //Set initial sizing to 8x8
  componentDidMount() {
    const stateObj = this.state;
    stateObj.types.Sizing = 320;
    this.setState(
      {
        ...stateObj,
      },
      () => this.setEstimate()
    );
  }

  updateSizing = (sizing, value) => {
    console.log("sizing in updatesizing", sizing);
    console.log("value in updatesizing", value);
    if (this.state.sizing === sizing) {
      return;
    } else {
      const prevState = this.state;
      prevState.types.Sizing = value;
      prevState.sizing = sizing;
      this.setState({ ...prevState }, () => this.setEstimate());
    }
  };

  setPricing = (type, price) => {
    // console.log("setPricing");
    const stateObj = this.state;
    stateObj.types[type] = price;
    this.setState(
      {
        ...stateObj,
      }
      // () => console.log("state", this.state)
    );
    this.setEstimate();
  };

  setInteriorPricing = (price) => {
    if (this.state.types.Interior === 0) {
      this.setPricing("Interior", price);
    } else {
      this.setPricing("Interior", 0);
    }
  };

  setSquareFootageEvent = (totalSquareFootage, ppsf) => {
    const stateObj = this.state;
    stateObj.types["Sizing"] = totalSquareFootage * ppsf;
    stateObj[totalSquareFootage] = totalSquareFootage;
    this.setState(
      {
        stateObj,
      }
      // () => console.log("state in set square footage event", this.state)
    );
    this.setEstimate();
  };

  checkoutOnClick = () => {
    console.log("Checkout");
  };

  render() {
    const { inputTypes, sizing } = this.state;
    return (
      <div className="App">
        <Container key="1" classes="AppContainer">
          <Container key="2" classes="LeftContainer">
            <Title titleText="ModShed Series Configurator" />
            <Display />
          </Container>
          <Container key="3" classes="RightContainer">
            <Container key="4" classes="buttonContainer">
              <Button
                onClick={this.checkoutOnClick}
                buttonText="Add To Wishlist"
                classes={"Button"}
              />
              <Button
                onClick={this.checkoutOnClick}
                buttonText="Checkout"
                classes={"Button"}
              />
            </Container>
            <Container key="5" classes="DropdownContainer">
              {inputTypes.map((input) => {
                return (
                  <Dropdown
                    setPriceEvent={this.setPricing}
                    setSquareFootageEvent={this.setSquareFootageEvent}
                    innerText={`Choose Your ${input}`}
                    type={input}
                    key={input}
                    interiorClickEvent={this.setInteriorPricing}
                    updateSizing={this.updateSizing}
                    size={sizing}
                  />
                );
              })}
              <Dropdown
                key="Estimate"
                estimateValue={this.state.estimate}
                clickEvent={this.dropdownClickHandler}
                innerText="Your Estimate"
                type="Estimate"
                typesValues={this.state.types}
              />
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
