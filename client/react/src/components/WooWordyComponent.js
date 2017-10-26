import React from 'react';

const WooWordyComponent = (props) => (

    <div className="section-info">
        <h1 className="section-title">About us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum
        excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo
        voluptatibus?
    </p>
        {
            props.about && <BigPoint about={props.about} />
        }

        <div className="seperator-line"></div>
    </div>

);

const BigPoint = (props) => (

    <div id="big-points-layout">
        <div className="big-points">
            <h1>{props.about.employeesNum}</h1>
            <h1>Employees</h1>
        </div>
        <div className="big-points">
            <h1>{props.about.founded}</h1>
            <h1>Founded</h1>
        </div>
        <div className="big-points">
            <h1>{props.about.funding}</h1>
            <h1>Funding</h1>
        </div>
    </div>
);



export default WooWordyComponent;