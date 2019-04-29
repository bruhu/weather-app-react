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
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // const city = this.state.city
    // const country = this.state.country
    const { city, country } = this.state;
    const { getWeather } = this.props;
    getWeather(city, country);
    this.setState({ city: "", country: "" });
  };

  render() {
    return (
      <React.Fragment>
        {/* accessing the props defined earlier on app.js and making the getWeather method accessible */}
        <form onSubmit={this.onSubmit}>
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
            onChange={this.onChange}
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
