import React from 'react';


export default class WooImagesList extends React.Component {

    render() {
        return (
            <div className="section-info" id="press">
                <h1 className="section-title">In the press</h1>
                <div id="press-layouts">

                    {
                        this.props.images.map((entry, index) => (
                            <div className="single-press">
                                <img src={entry.url}></img>
                                <div className="press-text-layout">
                                    <h1>{entry.title}</h1>
                                    <h2>{entry.link}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }

}


