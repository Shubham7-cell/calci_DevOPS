/**
 * The CalcButton class is component that renders as a button that holds
 * the appropriate int of operation values
 *
 */
import React, { Component } from "react";

export default class CalcButton extends Component {
  render() {
    return (
      <input
        className="calc-btn"
        type="button"
        value={this.props.label}
        onClick={this.clickHandler}
      />
    );
  }

  clickHandler = (e) => {
    this.props.clickedHandler(e.target.value);
  };
}
