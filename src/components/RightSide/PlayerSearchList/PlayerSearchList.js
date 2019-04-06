import React, { Component } from 'react';
import './playersearchlist.css';

import PlayerRow from '../PlayerRow/PlayerRow'


class PlayerSearchList extends Component {

    render() {

        let i = 0;
        return (
            <div className="search-list-container card">
                <ul className="mockdraftlist mt-4">
                    { this.props.searchResults.map((result) => {
                        if (result)
                            return (
                                <li key={i++} >
                                    <PlayerRow result={ result } type={ this.props.type }/>
                                </li>
                            );
                            return ("")
                        })

                    }
                </ul>
            </div>
        )
    }
}

export default PlayerSearchList;