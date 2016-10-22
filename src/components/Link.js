import React , {Component} from 'react';
import {connect} from 'react-redux';
import {goToPage} from '../actions/router';


class Link extends Component {
  constructor (props, context) {
    super(props, context);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation (ev) {
    const {goToPage} = this.props;

    switch (ev.button) {
      case 0: //'Left Mouse button pressed.'
        if (!(ev.metaKey || ev.ctrlKey)) {
          ev.preventDefault();
          const url = ev.currentTarget.getAttribute('href');
          goToPage(url);
        }
        break;
      case 1: //'Middle Mouse button pressed.'
      case 2: //Right Mouse button pressed.
      default:
    }
  }

  render () {
    let {children, goToPage, ...restProps} = this.props;
    return <a {...restProps} onClick={this.handleNavigation} >{children}</a>;
  }
}

export default connect(null, {
  goToPage
})(Link);