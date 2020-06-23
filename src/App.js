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
  };

  setEstimate = () => {
    const types = this.state.types;
    console.log("types", types);
    let estimate = 0;
    for (let type in types) {
      estimate += types[type];
    }
    console.log("estimate", estimate);
    this.setState(
      {
        estimate,
      },
      () => console.log("this.state.estimate", this.state.estimate)
    );
  };

  componentDidMount() {
    const sizing = "Sizing";
    // console.log(this.state[sizing]);
    // console.log("Pricing", Pricing["Size"]);
  }

  setPricing = (type, price) => {
    console.log("setPricing");
    const stateObj = this.state;
    stateObj.types[type] = price;
    this.setState(
      {
        ...stateObj,
      },
      () => console.log("state", this.state)
    );
    this.setEstimate();
  };

  setSquareFootageEvent = (totalSquareFootage, ppsf) => {
    console.log("setSquareFootageEvent");
    const stateObj = this.state;
    stateObj.types["Sizing"] = totalSquareFootage * ppsf;
    stateObj[totalSquareFootage] = totalSquareFootage;
    this.setState(
      {
        stateObj,
      },
      () => console.log("state in set square footage event", this.state)
    );
    this.setEstimate();
  };

  render() {
    const { inputTypes } = this.state;
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
                onClick={"#"}
                buttonText="Add To Wishlist"
                classes={"Button"}
              />
              <Button onClick={"#"} buttonText="Checkout" classes={"Button"} />
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
