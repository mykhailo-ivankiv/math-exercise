import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../styles/search.css';
import BEM from '../utils/BEM';
const b = BEM.b('search');


import R from 'ramda';

let getWords = R.split(/[,\s]/gi);
let toInt = R.map(word => parseInt(word));
let getInt = R.filter(num => Number.isInteger(num));

let getNumbers = R.pipe(
  getWords,
  toInt,
  getInt
);


import {
  searchNew,
  searchChange,
} from "../actions/search";

import {
  getCurrentSearch
} from '../reducers'

import PrimeFactorization from './PrimeFactorization';
import Helpers from './Helpers';

class Search extends Component {

  handleKeyPress (ev) {
    if (ev.keyCode === 13) { //Enter
      ev.preventDefault();

      const {searchNew} = this.props;
      searchNew("");
    }

  }

  handleChange (ev) {
    const {searchChange} = this.props;
    searchChange(ev.target.value);
  }

  render () {
    const {search} = this.props;
    const numbers = getNumbers(search);

    return (
      <form className={b()} onSubmit={ev => ev.preventDefault()}>
        <input
          className={b("input")}
          value={search}
          type="text"
          onKeyDown={this.handleKeyPress.bind(this)}
          onChange={this.handleChange.bind(this)}/>

        {search &&
          <div className={b("results")}>
            {R.not(R.isEmpty(numbers)) &&
            <div className="result-item">
              <div className={b("result-item-description")}>Прості множники:</div>
              {numbers.map(number => <PrimeFactorization value={number}/>)}
            </div>
            }

            {R.isEmpty(numbers) && "Немає результатів пошуку"}
            <Helpers/>
          </div>
        }

      </form>
    )
  }
};

export default connect (
  state => ({
    search: getCurrentSearch(state)
  }), {
    searchNew,
    searchChange,
  })(Search);