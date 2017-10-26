import React from 'react';


export default class WooStandard extends React.Component {

    getMeetCount = (standards) => {

        let met = 0;
        const total = standards.length;

        standards.forEach(function(entry) {
            if (entry.met){
                met++;
            }
        });

        return {
            met,
            total
        };
      };

    render() {
        const meetCount = this.getMeetCount(this.props.standards);
        
        return (
            <div className="card">
                <div className="container standard-layout">
                    <p id="agreed-msg">They have already agreed to meet {meetCount.met}/{meetCount.total} of your standards:</p>
                    
                    {
                        this.props.standards.map((entry, index) => (
                            entry.met 
                            ?
                            <p className="single-standard standard-approve">{entry.name}</p> 
                            :
                            <p className="single-standard standard-disapprove">{entry.name}</p> 
                          ))
                    }
                    
                    <div id="note-from-company">
                        <h1>Notes from Google:</h1>
                        <h2>We can relocate you to our Berlin office but with your current job position. There will be an option for
                    you to get promoted after a short while.
                </h2>

                    </div>
                </div>
            </div>
        );
    }

}




