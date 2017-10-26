import React from 'react';
import AuthAPI from '../actions/auth';


export default class WooLoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    AuthAPI.getData().then((res) => {
      var data = res.data._embedded.positions[0]
      console.log(JSON.stringify(data));
    })
        
   };

  render() {
    
    return (
      <div>position page woo, Loading data please wait...</div>
    );
    
    }
}
