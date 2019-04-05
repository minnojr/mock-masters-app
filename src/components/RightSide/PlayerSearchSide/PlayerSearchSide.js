import React, { Component } from 'react';
import { connect } from "react-redux";

import PlayerSearchList from '../PlayerSearchList/PlayerSearchList';
import SearchBar from '../SearchBar/SearchBar'
import PickRow from '../../LeftSide/PickRow/PickRow';


class PlayerSearchSide extends Component {

    state = {
        searchQuery: '',
        searchResults: []
    };

    updateQuery = (searchQuery) => {
        this.setState((currState) => ({
            searchQuery,
        }));
    };


    render() {
        const { players, focusPick } = this.props;

        if(!players) {
            return (
                <div>Players not found...</div>
            )
        }

        let allPlayers = [];
        for(let player in players) {
            allPlayers = [...allPlayers, players[player]];
        }

        let filteredPlayers = allPlayers.filter((player) => {
            return player.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
        });


        return (
            <div className="d-flex flex-column col-12 pl-0 pr-0">
                <h3 className="text-center mb-4">EDIT PICK</h3>
                <PickRow pick={focusPick} focusPick={true} />
                <SearchBar query={this.state.searchQuery} updateQuery={(searchQuery) => {
                    this.updateQuery(searchQuery)
                }}/>
                <PlayerSearchList searchResults={filteredPlayers} searchQuery={this.state.searchQuery}/>
            </div>
        )
    }
}

function mapStateToProps({  players, focusPick, picks }) {

    const focusPickToEdit = picks[focusPick];

    return {
        players: players ? players : "",
        focusPick: focusPickToEdit
    }
}

export default connect(mapStateToProps)(PlayerSearchSide);