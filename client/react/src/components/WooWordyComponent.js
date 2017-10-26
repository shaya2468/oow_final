import React from 'react';

const WooWordyComponent = (props) => (
    
    <div className="section-info">
    <h1 className="section-title">About us</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum
        excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo
        voluptatibus?
    </p>
    <BigPoint/>
    <div className="seperator-line"></div>
</div>
 
);

const BigPoint = (props) => (
    
    <div id="big-points-layout">
        <div className="big-points">
            <h1>500+</h1>
            <h1>Employees</h1>
        </div>
        <div className="big-points">
            <h1>2010</h1>
            <h1>Founded</h1>
        </div>
        <div className="big-points">
            <h1>$200M in 10 rounds</h1>
            <h1>Funding</h1>
        </div>
    </div>
);



export default WooWordyComponent;