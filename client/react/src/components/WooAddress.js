import React from 'react';

const WooAddress = (props) => (

    <div className="card">
        <div className="container address">
            <img className="full-img" src={props.address.image}></img>
            <h1>{props.address.city}</h1>
            <h1>{props.address.street}</h1>
        </div>
    </div>
);

export default WooAddress;
