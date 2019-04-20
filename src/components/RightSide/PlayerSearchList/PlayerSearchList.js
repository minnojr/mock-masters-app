import React, { Component } from 'react';
import { connect } from "react-redux";
import './playersearchlist.css';

import PlayerRow from '../PlayerRow/PlayerRow'


class PlayerSearchList extends Component {

    render() {

        let i = 0;
        return (
                <ul className="mockdraftlist">
                    { this.props.searchResults.map((result) => {
                        if (result) {
                            let alreadyPicked = this.props.playerPickIds.includes(result.id);
                            console.log(alreadyPicked);
                            return (
                                <li key={i++}>
                                    <PlayerRow alreadyPicked={alreadyPicked} orderNum={i} result={result} type={this.props.type}/>
                                </li>
                            );
                        }
                            return ("")
                        })

                    }
                </ul>
        )
    }
}

function mapStateToProps({ picks, players }) {
    const empty = [];
    console.log("MDDDD");

    let playerPickIds = [];
    if(picks) {
        for(let pick in picks) {
            playerPickIds.push(picks[pick].playerId)
        }
    }

    let playerIds = [];
    if(players) {
        for(let player in players) {
            playerIds.push(player)
        }
    }


    return {
        // playerIds: playerIds ? playerIds : empty,
        playerPickIds: playerPickIds ? playerPickIds : empty
    }
}

export default connect(mapStateToProps)(PlayerSearchList);