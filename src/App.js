import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Pricing from "./json/pricing.json";

class App extends Component {
  state = {
    inputTypes: [
      "Size",
      "Interior",
      "Exterior",
      "Siding",
      "Colors",
      "Services",
    ],
    Size: 0,
    Interior: 0,
    Exterior: 0,
    Siding: 0,
    Colors: 0,
    Services: 0,
    estimate: 0,
  };

  componentDidMount() {
    console.log("Pricing", Pricing["Size"]);
  }

  setPricing() {
    console.log("setPricing");
  }

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
              <Button onClick={"#"} buttonText="Add To Wishlist" />
              <Button onClick={"#"} buttonText="Checkout" />
            </Container>
            <Container key="5" classes="DropdownContainer">
              {inputTypes.map((input) => {
                return (
                  <Dropdown
                    clickEvent={this.setPricing}
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
              />
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
