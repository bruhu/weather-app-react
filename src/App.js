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
  getWeather = async (city, country) => {
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
      );
      const data = await api_call.json();

      console.log(data);
      //in here we will write our state values -- if statement to trigger the re-render only when we enter a value - else makes use of the error in case the values are incorrect
      if (!data.message) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else if (!city || !country) {
        this.setState({
          error: "Please enter a value."
        });
      } else if (data.message) {
        this.setState({
          error: "City not found"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.state;

    return (
      <div className="App">
        <Header />
        <InputForm getWeather={this.getWeather} />
        <WeatherDisplay
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    );
  }
}

export default App;
