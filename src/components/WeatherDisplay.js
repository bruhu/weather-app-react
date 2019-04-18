import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

export class WeatherDisplay extends Component {
  render() {
    return <div>{this.props.temperature}</div>;
  }
}

export default WeatherDisplay;
