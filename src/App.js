import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MortgageCalculator from './MortgageCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MortgageCalculator />
      </div>
    );
  }
}

export default App;
