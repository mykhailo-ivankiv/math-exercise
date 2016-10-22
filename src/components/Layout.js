//Vendors
import React from 'react';

//Styles
import '../styles/layout.css';
import BEM from '../utils/BEM';
const b = BEM.b('layout');

//Components

const Layout = ({ children }) => (
  <div className={b()}>
    {children}
  </div>
);

export default Layout;