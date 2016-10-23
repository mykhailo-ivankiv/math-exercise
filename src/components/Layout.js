//Vendors
import React from 'react';

//Styles
import '../styles/layout.css';
import BEM from '../utils/BEM';
const b = BEM.b('layout');

//Components
import Search from "./Search";

const Layout = ({ children }) => (
  <div className={b()}>
    <Search/>
    {children}
  </div>
);

export default Layout;