import React from 'react';

const WooWordyComponent = (props) => (

    <div className="section-info">
        <h1 className="section-title">{props.title}</h1>
        {
            props.subtitle && <p>{props.subtitle}</p>
        }
        {
            props.firstSentance && <p>{props.firstSentance}</p>
        }
        {
            props.secondSentance && <p>{props.secondSentance}</p>
        }
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