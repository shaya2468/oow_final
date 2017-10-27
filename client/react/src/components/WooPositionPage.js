import React from 'react';
import AuthAPI from '../actions/auth';
import WooTitle from './WooTitle';
import WooMainPart from './WooMainPart';
import WooStandard from './WooStandard';
import WooImportantActions from './WooImportantActions';
import WooAddress from './WooAddress';
import WooWordyComponent from './WooWordyComponent';
import WooImages from './WooImages';
import WooList from './WooList';

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
          <WooImages images={this.state.companyImages}/>
          <WooAddress address={this.state.address}/>
          <WooWordyComponent about={this.state.about} title={"About us"} subtitle={this.state.about.title}/>
          <WooWordyComponent  title={"Our product"} 
              subtitle={this.state.product.title} 
              firstSentance={this.state.product.sentance1}
              secondSentance={this.state.product.sentance2}
              twoImages={this.state.product.images}
              />
          <WooList orderedLists=
          {[{list: this.state.descriptionsList ,listTitle: "Position Description and Responsibilities"},
            {list: this.state.requirementsList,listTitle: "Position Requirements"}]} 
            title={"About the " + this.state.positionName + " position"} 
            />
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
    let about = company.about;
    let product = position.product;
    let descriptionsList = position.descriptions;
    let requirementsList = position.requirements;
    let companyImages = company.images;
    this.setState(() => ({
      isLoadingData: false,
      companyName,
      positionName,
      companyLogo,
      standards,
      note,
      address,
      about,
      product,
      descriptionsList,
      requirementsList,
      companyImages
    }));
  };
}
