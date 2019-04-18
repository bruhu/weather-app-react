import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import WeatherDisplay from "./components/WeatherDisplay";
// import WeatherDisplay from "./components/WeatherDisplay"
import "./assets/styles/App.css";

const API_KEY = "9ed85315e283641973f2df53aa78b4ad";

class App extends Component {
  //initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //this is a method
  getWeather = async e => {
    e.preventDefault();
    //event object gets the value from inputform through the attributes - those variables will be dynamically passed onto the api call
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //preventDefault -> prevents default behavior of all these components when button's clicked = object will appear
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    //in here we will write our state values
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
    console.log(this.props.city);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm getWeather={this.getWeather} />
        <WeatherDisplay
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
