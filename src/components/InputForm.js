import React, { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "../assets/styles/InputForm.css";

const API_KEY = "9ed85315e283641973f2df53aa78b4ad";

export class InputForm extends Component {
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
  console.log(data);

  //in here we will write our state values
  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ""
  });
};


  // constructor(props) {
  //   super(props);
  //   //set initial state:
  //   this.state = {
  //     data: null
  //   };
  // }

  // //will use api example (hardcoded) until this worrrrrrks
  // componentDidMount() {

  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => console.log(posts));
  // }

  render() {
    return (
      <React.Fragment>
      {/* accessing the props defined earlier on app.js and making the getWeather method accessible */}
      <form onSubmit={this.props.getWeather}>
        <h3>Which city's weather do you want to check?</h3>
        {/* name attribute is what we will use to fetch the values */}
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        {/* do I need a button? */}
        <button>Get weather</button>
        {/* <textarea
          rows="3"
          cols="30"
          placeholder="Write your wanted location here"
          className="inputForm"
        /> */}
      
      </form>
      {/* getWeather is a prop - this here will refer to app component - with this the getWeather function will be accessible from the inpustform component as well */}
        <WeatherDisplay getWeather={this.getWeather} />
        </React.Fragment>
    );
  }
}

export default InputForm;

// Useful links for this:
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
// https://www.robinwieruch.de/react-fetching-data/
