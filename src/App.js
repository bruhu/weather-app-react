import React, {
  Component
} from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
import './assets/styles/App.css'

const API_KEY = "9ed85315e283641973f2df53aa78b4ad"
class App extends Component {
  //this is a method
  getWeather = async () => {
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}&units=metric`)
const data = await api_call.json()
console.log(data);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          <InputForm />
          
        </div>
      </div>
    );
  }
}

export default App;