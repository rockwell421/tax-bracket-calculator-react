import React, { Component } from 'react';
import './App.css';

class MortgageCalculator extends Component {

  /*
  To Add:
  -API post to a database, or send this value to your email
  -Styling
  -create field for property value and have mortgage amount display at the bottom
  */

  state = {
    principleValue: 0,
    downPayment: 0,
    interestRateValue: 0,
    amortizationPeriod: 0,
    payment: 0
  }

//Calculation Logic
  mortgageCalculation() {
    let rate = this.refs.interestInput.value;
    let term = this.refs.amortizationInput.value;
    let principal = this.refs.principalInput.value;

      //enables whole number percentage or decimal
      if(rate > 1) {
        rate = rate * 0.01;
      } else {
        rate = rate;
      }
      //can accept the term in years
      if(term <= 30) {
        term = term * 12;
      } else {
        term = term;
      }

    let monthlyRate = rate/12;
    let factor = Math.pow(monthlyRate + 1, term);
    let numerator = monthlyRate * factor;
    let denominator = factor - 1;
    let quotient = numerator/denominator;
    let payment = principal * quotient;
    return payment.toFixed(2);
  }

//event handler (when user inputs info)
  onInput = (e) => {
    this.setState({
      principleValue: this.refs.principalInput.value,
      downPayment: this.refs.downPaymentInput.value,
      interestRateValue: this.refs.interestInput.value,
      amortizationPeriod: this.refs.amortizationInput.value,
      mortgageAmount: this.principalValue - this.downPayment,
      payment: this.mortgageCalculation()
    })
  }

  //display logic

  render() {
    return (
      <div>
        <h1>React Mortgage Calculator</h1>
        <form className="Form">

          <h2>Mortgage Value</h2>
          <input type="number" value={this.state.principalValue} ref="principalInput" onChange={this.onInput.bind(this)} />

          <h2>Down Payment</h2>
          <input type="number" value={this.state.downPayment} ref="downPaymentInput" onChange={this.onInput.bind(this)} />

          <h2>Interest</h2>
          <input type="number" value={this.state.interestRateValue} ref="interestInput" onChange={this.onInput.bind(this)} />

          <h2>Amortization (Years)</h2>
          <input type="number" value={this.state.amortizationPeriod} ref="amortizationInput" onChange={this.onInput.bind(this)} />

        </form>

        <br />
        <h2>Your mortgage value is: $ {this.state.principleValue}</h2>
        <h2>Your down payment is: $ {this.state.downPayment}</h2>
        <h2>Your interest rate is: {this.state.interestRateValue}%</h2>
        <h2>Your interest amortization period is: {this.state.amortizationPeriod} years</h2>
        <h2 style={{color: 'green'}}>Your monthly mortgage payments are: ${this.state.payment}</h2>
      </div>
    )
  }
}

export default MortgageCalculator;
