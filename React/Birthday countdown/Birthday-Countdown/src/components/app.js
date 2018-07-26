import React, { Component } from "react";
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock />,
        ChangeDate("Change Date", () => this.setState({ active: false }))
      ];
    } else {
      return Button("Generate CountDown", () =>
        this.setState({ active: true })
      );
    }
  }.bind(this);
  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        <div className="grid__skew-dark-one-box" />
        <div className="grid__skew-dark-two" />
        <div className="grid__skew-dark-three" />
        <div className="grid__skew-dark-one" />

        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three-box" />

        <Picker />
        {this.renderItems()}
        <Clock />
      </div>
    );
  }
}
