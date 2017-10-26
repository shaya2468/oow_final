import React from 'react';
import AuthAPI from '../actions/auth';
import WooTitle from './WooTitle';

export default class WooLoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoadingData: true
    };
  }

  componentDidMount = () => {
    AuthAPI.getData().then((res) => {
      var data = res.data._embedded.positions[0]
      console.log(JSON.stringify(data));
      this.setState(() => ({ isLoadingData: false }));
    })

  };

  render() {

    if (this.state.isLoadingData) {
      return (
        <div>Loading data, Please wait...</div>
      )
    } else {
      return (
        <WooTitle/>
      );
    }
  }
}
