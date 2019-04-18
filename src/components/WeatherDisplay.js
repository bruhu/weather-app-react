import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

export class WeatherDisplay extends Component {
  render() {
    return <React.Fragment>
      <h3>City: {this.props.city}</h3>
      <h3>Country: {this.props.country}</h3>
      <h3>Weather: {this.props.description} </h3>
      <h3>Temperature (in Celcius): {this.props.temperature}</h3>
      <h3>Humidity: {this.props.humidity}</h3>    
    </React.Fragment>;
  }
}

export default WeatherDisplay;
