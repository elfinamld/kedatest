import React, { Component } from "react";
import RadioWithDate from "./components/organisms/RadioWithDate";
import RadioWithInput from "./components/organisms/RadioWithInput";
import RadioWithLabels from "./components/organisms/RadioWithLabels";
import RadioWithOther from "./components/organisms/RadioWithOther";

class App extends Component {
  render() {
    return (
      <div style={{ marginLeft: 15 }}>
        <RadioWithLabels />
        <RadioWithInput />
        <RadioWithDate />
        <RadioWithOther />
      </div>
    );
  }
}

export default App;
