import React, { Component } from 'react'
import './assets/styles/InputForm.css'

export class InputForm extends Component {
  render() {
    return (
      <div>
        <h3>Which city's weather do you want to check?</h3>
      <textarea rows="3" cols="30" placeholder="Write your wanted location here"></textarea>
      </div>
    )
  }
}

export default InputForm
