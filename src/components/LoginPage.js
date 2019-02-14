import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startFbLogin } from '../actions/authfb';

export const LoginPage = ({ startLogin, startFbLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button
      className="button button--google"
      onClick={startLogin}
      > Log in With Google</button>
      <div className="fb-login-button"
      data-size="medium"
      data-button-type="login_with"
      data-auto-logout-link="false"
      data-use-continue-as="false"
      onClick={startFbLogin}
      ></div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startFbLogin: () => dispatch(startFbLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
