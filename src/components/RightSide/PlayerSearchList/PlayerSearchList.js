import React, { Component } from 'react';
import './playersearchlist.css';

import PlayerRow from '../PlayerRow/PlayerRow'


class PlayerSearchList extends Component {

    render() {

        let i = 0;
        return (
                <ul className="mockdraftlist">
                    { this.props.searchResults.map((result) => {
                        if (result)
                            return (
                                <li key={i++} >
                                    <PlayerRow orderNum={i} result={ result } type={ this.props.type }/>
                                </li>
                            );
                            return ("")
                        })

                    }
                </ul>
        )
    }
}

export default PlayerSearchList;