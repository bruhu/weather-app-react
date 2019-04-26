import React, { Component } from "react";
// import WeatherDisplay from "./WeatherDisplay";
import "../assets/styles/InputForm.css";

export class InputForm extends Component {
  state = {
    city: "",
    country: ""
  };
  onChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* accessing the props defined earlier on app.js and making the getWeather method accessible */}
        <form onSubmit={this.props.getWeather}>
          <h3>Which city's weather do you want to check?</h3>
          {/* name attribute is what we will use to fetch the values */}
          <input
            type="text"
            name="city"
            placeholder="City..."
            required
            value={this.state.city}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country..."
            required
            value={this.state.country}
          />
          <br />
          {/* do I need a button? */}
          <button>Get weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default InputForm;
