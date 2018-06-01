import React, { Component } from 'react';
import './App.css';

class TaxCalculator extends Component {

  state = {
    annualSalary: "",
    provincialTax: "",
    federalTax: ""
  }

  //input validations

  //calculation logic
  provincialTaxCalculator() {
    //switch statement to determine salary ranges
  }

  federalTaxCalculator() {
    //switch statement to determine salary ranges
  }

  onInput = (e) => {
    this.setState({

    })
  }

  render() {
    return (
      <div>
        <h1>Quebec Tax Calculator</h1>
        <form>
          <h2>Your Annual Income:</h2>
          <input type="number" value="" ref="incomeInput" onChange="" />
        </form>
        <br />

        <h3>Your federal income tax is: $value</h3>
        <h3>Your provincial income tax is: $value</h3>

      </div>
    )
  }
}
