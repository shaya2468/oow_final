import React from 'react';
import AuthAPI from '../actions/auth';
import WooTitle from './WooTitle';

export default class WooLoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoadingData: true,
      companyName: null,
      positionName: null

    };
  }

  componentDidMount = () => {
    AuthAPI.getData().then((res) => {
      var position = res.data._embedded.positions[0]
      console.log(JSON.stringify(position));
      this.initState(position)
    })
  };

  render() {

    if (this.state.isLoadingData) {
      return (
        <div>Loading data, Please wait...</div>
      )
    } else {
      return (
        <WooTitle positionTitle={this.state.positionName}/>
      );
    }
  }

  initState = (position) => {
    let company = position.company.name;
    let positionName = position.name;
    this.setState(() => ({ 
      isLoadingData: false,
      companyName: company,
      positionName: positionName
    }));
  };
}
