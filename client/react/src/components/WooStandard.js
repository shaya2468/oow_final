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
                            <div key={index} className="single-standard standard-approve">
                                <CheckSVG/><p key={index}>{entry.name}</p> 
                            </div>
                            
                            :
                            <div key={index} className="single-standard standard-disapprove">
                                <TimesSVG/><p key={index} >{entry.name}</p> 
                            </div>
                            
                          ))
                    }
                    
                    <div id="note-from-company">
                        <h1>Notes from {this.props.companyName}:</h1>
                        <h2>{this.props.note}</h2>
                    </div>
                </div>
            </div>
        );
    }

}

const CheckSVG = () => (
    <div>
        <svg className="svg-standard" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>
    </div>
  );

  const TimesSVG = () => (
    <div>
    <svg className="svg-standard" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>
    </div>
  );



