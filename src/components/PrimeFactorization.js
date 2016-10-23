import React, {Component} from 'react';
import R from 'ramda'

import '../styles/prime-factorization.css';
import BEM from '../utils/BEM';
const b = BEM.b('prime-factorization');

const primeFactorization = R.memoize((num, prevRecursionIterationResults = []) => {
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
})

const PrimeFactorization = ({value}) => (
  <div className={b()}>
    <span className={b("primeNumbers")}>
      {value} {primeFactorization(value).map((number, i) => <span className={b('prime')} key={i}>{number}</span>)}
    </span>
  </div>
);


export default PrimeFactorization;