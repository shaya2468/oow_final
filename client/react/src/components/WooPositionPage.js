import React from 'react';
import AuthAPI from '../actions/auth';
import WooTitle from './WooTitle';
import WooMainPart from './WooMainPart';
import WooStandard from './WooStandard';
import WooImportantActions from './WooImportantActions';
import WooAddress from './WooAddress';

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
        <div id="body-position">
          <WooTitle positionName={this.state.positionName} companyLogo={this.state.companyLogo} />
          <WooMainPart companyName={this.state.companyName} positionName={this.state.positionName}/>
          <WooStandard standards={this.state.standards} note={this.state.note} companyName={this.state.companyName}/>
          <WooImportantActions/>
          <WooAddress address={this.state.address}/>
       </div>
      );
    }
  }

  initState = (position) => {
    let company = position.company;

    let companyName = company.name;
    let positionName = position.name;
    let companyLogo = company.logo;
    let standards = position.standards;
    let note = position.note;
    let address = company.address;
    this.setState(() => ({
      isLoadingData: false,
      companyName,
      positionName,
      companyLogo,
      standards,
      note,
      address
    }));
  };
}
