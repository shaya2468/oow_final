import React from 'react';

const WooTitle = (props) => (
    <div id="body-position">
    <div className="start-point">
      <img id="company-logo" src="https://goo.gl/re5wjf"></img>
      <div id="position-title-layout">
        <h1>{props.positionTitle}</h1>
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

export default WooTitle;