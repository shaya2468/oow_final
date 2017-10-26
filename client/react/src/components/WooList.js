import React from 'react';

const WooList = (props) => (

    <div className="section-info">
    <h1 className="section-title">{props.title}</h1>

    {
        props.orderedLists.map((entry, index) => (
            <div key={index}>
                <p className="list-title">{entry.listTitle}
                </p>
                <ol>
                    {
                        entry.list.map((entry, index) => (
                            <li key={index}>{entry.name}</li>
                        ))
                    }
                </ol>
            </div>
            ))
    }

    
  
    <div className="seperator-line"></div>
</div>

);

export default WooList;