import React, { Component } from 'react';
import './playersearchlist.css';

import PlayerRow from '../PlayerRow/PlayerRow'


class PlayerSearchList extends Component {

    render() {

        let i = 0;
        return (
                <ul className="mockdraftlist">
                    { this.props.searchResults.map((result) => {
                        console.log("RESULT:");
                        // console.log(result);
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
        // {/*<div className="search-container">*/}
        // </div>
        )
    }
}

export default PlayerSearchList;