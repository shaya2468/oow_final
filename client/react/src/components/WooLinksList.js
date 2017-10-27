import React from 'react';

const WooLinksList = (props) => (

    <div className="section-info last-section-info">
    <h1 className="section-title">Links</h1>
    <ul>
        {
            props.links.map((entry, index) => (
                <li key={index}>
                     <a href={entry.link}>{entry.name}</a>
                </li>
            ))
        }
    </ul>
</div>

);

export default WooLinksList;