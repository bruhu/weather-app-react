import React, {
  Component
} from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
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
          
        </div>
      </div>
    );
  }
}

export default App;