import React, { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "../assets/styles/InputForm.css";

export class InputForm extends Component {
  constructor(props) {
    super(props);
    //set initial state:
    this.state = {
      data: null
    };
  }

  // //will use api example (hardcoded) until this worrrrrrks
  // componentDidMount() {
    
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => console.log(posts));
  // }

  render() {
    return (
      <div>
        <h3>Which city's weather do you want to check?</h3>
        <input type="text"/>
        <input type="text"/>
        {/* <textarea
          rows="3"
          cols="30"
          placeholder="Write your wanted location here"
          className="inputForm"
        /> */}
        <WeatherDisplay />
      </div>
    );
  }
}

export default InputForm;

// Useful links for this:
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
// https://www.robinwieruch.de/react-fetching-data/
