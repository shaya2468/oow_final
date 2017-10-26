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
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" required placeholder="Your name.."></input>

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" required placeholder="Your last name.."></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>


    )

  }
}
