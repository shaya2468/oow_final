import React from 'react';

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

  onLoginSuccess = (e) => {
    console.log('login successfull');
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
        <button onClick={this.onLoginSuccess}>login</button>
      </div>
    )
    
  }
}
