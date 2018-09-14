import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to ="/help" activeClassName="is-active">Help</NavLink>
  </header>
);
export default Header;
