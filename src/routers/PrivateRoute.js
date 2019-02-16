import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  username,
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
      <Header username={username}/>
      <Component {...props}/>
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = (state) => {
  return {
  isAuthenticated: !!state.auth.uid,
  username: state.auth.username
  };
};

export default connect(mapStateToProps)(PrivateRoute);
