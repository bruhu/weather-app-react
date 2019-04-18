import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

export class WeatherDisplay extends Component {
  render() {
    return (
      <div>
        <h2>City</h2>
        <h4>Current weather</h4>
        <h4>Temperature</h4>
      </div>
    );
  }
}

export default WeatherDisplay;
