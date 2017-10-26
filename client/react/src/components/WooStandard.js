import React from 'react';

const WooStandard = (props) => (

    <div className="card">
        <div className="container standard-layout">
            <p id="agreed-msg">They have already agreed to meet 4/6 of your standards:</p>
            <p className="single-standard standard-approve">Preferred Salary</p>
            <p className="single-standard standard-approve">Relocation</p>
            <p className="single-standard standard-approve">Company Specialty</p>
            <p className="single-standard standard-approve">Specific company</p>
            <p className="single-standard standard-disapprove">Ice cream daily</p>
            <p className="single-standard standard-disapprove">Fifa play station</p>

            <div id="note-from-company">
                <h1>Notes from Google:</h1>
                <h2>We can relocate you to our Berlin office but with your current job position. There will be an option for
                you to get promoted after a short while.
            </h2>

            </div>
        </div>
    </div>

);

export default WooStandard;
