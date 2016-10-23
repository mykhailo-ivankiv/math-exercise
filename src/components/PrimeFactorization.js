import React, {Component} from 'react';

import '../styles/prime-factorization.css';
import BEM from '../utils/BEM';
const b = BEM.b('prime-factorization');

const primeFactorization = (num, prevRecursionIterationResults = []) => {
  let root = Math.sqrt(num),
    x = 2;

  if(num % x){//if not divisible by 2
    x = 3;//assign first odd
    while((num % x) && ((x = x + 2) < root)){}//iterate odds
  }
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  prevRecursionIterationResults.push(x);//push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? prevRecursionIterationResults : primeFactorization(num/x, prevRecursionIterationResults) ;
}

class PrimeFactorization extends Component  {
  constructor (props) {
    super(props);

    this.state = {
      primeNumbers : []
    }
  }

  handleInputChange (ev) {
    const primeNumbers = primeFactorization(ev.target.value);
    this.setState({primeNumbers});
  }

  render () {
    const {primeNumbers} = this.state;

    return (
      <div className={b()}>
        Розклад числа на прості множники. <br/>
        <input
          placeholder="Складне число"
          type="number"
          onChange={this.handleInputChange.bind(this)} />
        <span className={b("primeNumbers")}>
          {primeNumbers.map((number, i) => <span className={b('prime')} key={i}>{number}</span>)}
        </span>
      </div>
    )
  }


}

export default PrimeFactorization;