import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { startFbLogout } from '../actions/authfb';

export const Header = ({ startLogout, startFbLogout, username }) => {
  const usernameArray = username.split(" ");
  const firstName = usernameArray[0];
 return (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link
        className="header__title"
        to="/dashboard">
          <div>
            <h1>Expensify</h1>
            <span>Hi {firstName}, Lets get your expenses under control!</span>
          </div>
        </Link>
        <button
        className=" button button--link"
        onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
