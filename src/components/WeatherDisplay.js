import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

// a stateless component could also be written without a class - and it goes like this:
export class WeatherDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        {/* conditional operator -> when both conditions meet, it'll render the whole JSX ONLY when button is pressed */}
        {this.props.city && this.props.country && (
          <div className="weather-row">
            <div>Location:</div>
            <div>
              {this.props.city}, {this.props.country}
            </div>
          </div>
        )}
        {this.props.temperature && (
          <div className="weather-row">
            <h3>Temperature: {this.props.temperature}°C</h3>
          </div>
        )}
        {this.props.humidity && (
          <div className="weather-row">
            <h3>Humidity: {this.props.humidity}% </h3>
          </div>
        )}
        {this.props.description && (
          <div className="weather-row">
            <h3>Conditions: {this.props.description}</h3>
          </div>
        )}
        {/* and in case of error: */}
        {this.props.error && (
          <div className="weather-row">
            <p className="error-paragraph">{this.props.error}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default WeatherDisplay;
