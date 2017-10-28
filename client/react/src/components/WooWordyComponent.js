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
        {
            props.twoImages && <TwoImages twoImages={props.twoImages} />
        }

        <div className="seperator-line"></div>
    </div>

);

const TwoImages = (props) => (
    <div id="product-imgs">
        <img src={props.twoImages[0].url}></img>
        <img src={props.twoImages[1].url}></img>
    </div>
)

const BigPoint = (props) => (

    <div id="big-points-layout">
        <div className="big-points-inner-layout">
        <UsersSVG/>
            <div className="big-points">
                <h1>{props.about.employeesNum}</h1>
                <h1>Employees</h1>
            </div>
        </div>
        <div className="big-points-inner-layout">
        <ClockSVG/>
            <div className="big-points">
                <h1>{props.about.founded}</h1>
                <h1>Founded</h1>
            </div>
        </div>
        <div className="big-points-inner-layout">
        <DollarSVG/>
            <div className="big-points">
                <h1>{props.about.funding}</h1>
                <h1>Funding</h1>
            </div>
        </div>
    </div>
);

const DollarSVG = () => (
    <div>
    <svg className="big-points-svg" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"/></svg>
    </div>
);
const UsersSVG = () => (
    <div>
    <svg className="big-points-svg" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M529 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-1024-1277q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm704 384q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"/></svg>
    </div>
);
const ClockSVG = () => (
    <div>
    <svg className="big-points-svg" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>
    </div>
);



export default WooWordyComponent;