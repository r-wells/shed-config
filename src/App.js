import React from "react";
import "./App.css";

import Container from "./components/Container/Container";
import Display from "./components/Display/Display";
import ImageSelect from "./components/ImageSelect/ImageSelect";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <Display />
      <ImageSelect />
      <Container>
        <Container>
          <Button />
          <Button />
        </Container>
        <Container>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </Container>
      </Container>
    </div>
  );
}

export default App;
