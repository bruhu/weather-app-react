import React, { Component } from "react";
import "../assets/styles/WeatherDisplay.css";

// a stateless component could also be written without a class - and it goes like this:
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
        {this.props.temperature && (
          <h3>Temperature: {this.props.temperature}°C</h3>
        )}
        {this.props.humidity && <h3>Humidity: {this.props.humidity}% </h3>}
        {this.props.description && (
          <h3>Conditions: {this.props.description} </h3>
        )}
        {/* and in case of error: */}
        {this.props.error && <p className="error-paragraph">{this.props.error}</p>}
      </React.Fragment>
    );
  }
}

export default WeatherDisplay;
