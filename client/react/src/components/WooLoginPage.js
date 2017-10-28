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
      loggedIn: false,
      userName: "",
      password: ""
    };
  }

  onUserNameChange = (e) => {
    const userName = e.target.value;
    this.setState(() => ({ userName }));
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  startLogin = (e) => {
    AuthAPI.login('shaya', 'ajzner');
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    AuthAPI.login(this.state.userName, this.state.password)
    .then((res) => {
      var token = res.data.access_token;
      localStorage.setItem("token", token);
      this.setState(() => ({ loggedIn: true }));
    }).catch((e) => {
      console.log('got a damn error')
      console.log(e);
    })
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
          <input type="text" id="fname" name="firstname" required placeholder="User name" onChange={this.onUserNameChange} value={this.state.userName}></input>

          <label>Password</label>
          <input type="password" id="lname" name="lastname" required placeholder="Password" onChange={this.onPasswordChange} value={this.state.password}></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>


    )

  }
}
