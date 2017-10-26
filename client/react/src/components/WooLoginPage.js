import React from 'react';
import AuthAPI from '../actions/auth';

import {
  Redirect,  Route,
  Link
} from 'react-router-dom'

export default class WooLoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn:false
    };
  }

  startLogin = (e) => {
    AuthAPI.login('shaya', 'ajzner');
  };

  onLoginSuccess = (e) => {
    this.setState(() => ({ loggedIn:true }));
    localStorage.setItem("token", "uyty");
  };



  render() {

    if (this.state.loggedIn){
      return (
        <Redirect to={{
          pathname: '/dashboard'
        }}/>
      );
    }
    return (

      
      <div>
        This is the LOGIN page! {this.state.loggedIn ? 'aaa' : 'bbb'}
        <button onClick={this.startLogin}>login</button>
      </div>
    )
    
  }
}
