/**
 * The App class is the main class that instantiates and renders all
 * the child components to create the main component
 *
 */

import React, { Component } from "react";
import NumberBtn from "./CalcButton";
import LabelScreen from "./CalcDisplay";
import CalculateCommand from "../commands/CalcCommand";

import "../styles/App.css";
import "../styles/styles.css";
import "../styles/CalcButton.css";
import "../styles/CalcDisplay.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.currentDisplayValue = 0;
    this.isNextNumber = false;
    this.currentOperation = null;
    this.calculateCommand = new CalculateCommand();
    this.state = {
      data: "0",
    };
  }

  clickedHandler = (value) => {
    let calculatedValue = this.calculateCommand.calculate(
      value,
      this.state.data
    );
    this.setState(() => ({
      data: calculatedValue,
    }));
  };

  createButtons = (item, index) => {
    return <NumberBtn label={item} clickedHandler={this.clickedHandler} />;
  };

  createDivs = (arr) => {
    return <div>{arr.map(this.createButtons)}</div>;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Calculate with Shubham</h3>
        </header>

        <div className="calc-body">
          <LabelScreen value={this.state.data} />
          {this.createDivs(["1", "2", "3", "+"])}
          {this.createDivs(["4", "5", "6", "-"])}
          {this.createDivs(["7", "8", "9", "*"])}
          {this.createDivs([".", "0", "=", "/"])}
          {this.createDivs(["C"])}
        </div>
      </div>
    );
  }
}

export default App;
