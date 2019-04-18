import React, {
  Component
} from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
import './assets/styles/App.css';

const API_KEY = "9ed85315e283641973f2df53aa78b4ad
class App extends Component {
  //this is a method
  getWeather = () => {

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