import React, {
  Component
} from 'react';
import Header from './Header'
import InputForm from './InputForm'
import WeatherDisplay from './WeatherDisplay'
import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          <InputForm />
          <WeatherDisplay />
        </div>
      </div>
    );
  }
}

export default App;