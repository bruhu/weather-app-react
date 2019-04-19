import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

export class WeatherDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        {/* conditional operator -> when both conditions meet, it'll render the whole JSX ONLY when button is pressed */}
        {this.props.city && this.props.country && (
          <h3>
            Location: {this.props.city}, {this.props.country}
          </h3>
        )}
        { this.props.description && (<h3>Conditions: {this.props.description} </h3>) }

        
        <h3>Temperature (in Celcius): {this.props.temperature}</h3>
        <h3>Humidity: {this.props.humidity}</h3>
      </React.Fragment>
    );
  }
}

export default WeatherDisplay;
