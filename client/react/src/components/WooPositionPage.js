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
        <WooTitle positionTitle={this.state.positionName} companyLogo={this.state.companyLogo}/>
      );
    }
  }

  initState = (position) => {
    let companyName = position.company.name;
    let positionName = position.name;
    let companyLogo = position.company.logo;
    this.setState(() => ({ 
      isLoadingData: false,
      companyName,
      positionName,
      companyLogo
    }));
  };
}
