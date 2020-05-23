import React from "react";
import "./App.css";

import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <Container
        key="1"
        style={{
          width: "60%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Container
          key="2"
          style={{ width: "60%", alignItems: "center", height: "100%" }}
        >
          <Title titleText="ModShed Series Configurator" />
          <Display />
        </Container>
        <Container
          key="3"
          style={{
            marginLeft: "2%",
            width: "38%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Container
            key="4"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button onClick={"#"} buttonText="Add To Wishlist" />
            <Button onClick={"#"} buttonText="Checkout" />
          </Container>
          <Container key="5" style={{ marginTop: "10px" }}>
            <Dropdown innerText="1. Choose your size" type="Size" />
            <Dropdown innerText="2. Choose your interior" type="Interior" />
            <Dropdown
              innerText="3. Choose your exterior layout"
              type="Exterior"
            />
            <Dropdown innerText="4. Choose your siding" type="Siding" />
            <Dropdown innerText="5. Choose your colors" type="Colors" />
            <Dropdown
              innerText="6. Choose your services and foundation"
              type="Services"
            />
            <Dropdown innerText="Your Estimate" type="Estimate" />
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
