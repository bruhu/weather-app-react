import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
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
    //we will also use event object to get the value from inputform through the attributes - those variables will be dynamically passed onto the api call
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //preventDefault will prevent the default behavior of all these components when we press the button = object will appear
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          {/* getWeather is a prop - this here will refer to app component - with this the getWeather function will be accessible from the inpustform component as well */}
          <InputForm getWeather={this.getWeather} />
        </div>
      </div>
    );
  }
}

export default App;
