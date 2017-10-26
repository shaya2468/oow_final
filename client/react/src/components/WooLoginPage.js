import React from 'react';
import AuthAPI from '../actions/auth';

import {
  Redirect, Route,
  Link
} from 'react-router-dom'

export default class WooLoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  startLogin = (e) => {
    AuthAPI.login('shaya', 'ajzner');
  };

  onLoginSuccess = (e) => {
    this.setState(() => ({ loggedIn: true }));
    localStorage.setItem("token", "uyty");
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log('onSubmit !! done')
  };

  render() {

    if (this.state.loggedIn) {
      return (
        <Redirect to={{
          pathname: '/dashboard'
        }} />
      );
    }
    return (



      <div id="login-page">
        <form onSubmit={this.onSubmit}>
          <label >User name</label>
          <input type="text" id="fname" name="firstname" required placeholder="User name"></input>

          <label>Password</label>
          <input type="password" id="lname" name="lastname" required placeholder="Password"></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>


    )

  }
}
