import React from 'react';
import AuthAPI from '../actions/auth';


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
        <div id="body-position">
          <div className="start-point">
            <img id="company-logo" src="https://goo.gl/re5wjf"></img>
            <div id="position-title-layout">
              <h1>Senior Software Engineer</h1>
              <div id="position-title-details">
                <div className="title-single-detail">
                  <h1>0 days ago</h1>
                </div>
                <div className="title-single-detail">
                  <h1>Accepted</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
