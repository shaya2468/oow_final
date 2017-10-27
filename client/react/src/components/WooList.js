import React from 'react';

const WooList = (props) => (

    <div className="section-info">
    <h1 className="section-title">{props.title}</h1>

    {
        props.orderedLists?

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
            :
            <div></div>
    }

    {
        <div>
                <p className="list-title">{props.unorderedListTitle}
                </p>
                <ul>
                    {
                        props.unorderedList.map((entry, index) => (
                            <li key={index}>{entry.name}</li>
                        ))
                    }
                </ul>
            </div>
    }
    <div className="seperator-line"></div>
</div>

);

export default WooList;