import React from 'react';

const WooMainPart = (props) => (
    
    <div id="main-part">
        <h1 id="comp-like">{props.companyName} likes you!</h1>
        <p id="comp-view">They think you could be a great fit for them as a {props.positionName} and would like to view your full profile.
        </p>
        <img className="full-img" src="https://goo.gl/R9xakP" alt=""></img>
  </div>
 
);

export default WooMainPart;
