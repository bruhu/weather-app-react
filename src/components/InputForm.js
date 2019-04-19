import React, { Component } from "react";
// import WeatherDisplay from "./WeatherDisplay";
import "../assets/styles/InputForm.css";

export class InputForm extends Component {
  render() {
    return (
      <React.Fragment>
        {/* accessing the props defined earlier on app.js and making the getWeather method accessible */}
        <form onSubmit={this.props.getWeather}>
          <h3>Which city's weather do you want to check?</h3>
          {/* name attribute is what we will use to fetch the values */}
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <br />
          {/* do I need a button? */}
          <button>Get weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default InputForm;

// Useful links for this:
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
// https://www.robinwieruch.de/react-fetching-data/

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
