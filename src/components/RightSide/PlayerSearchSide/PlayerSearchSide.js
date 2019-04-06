import React, { Component } from 'react';
import { connect } from "react-redux";

import PlayerSearchList from '../PlayerSearchList/PlayerSearchList';
import SearchBar from '../SearchBar/SearchBar'
import PickRow from '../../LeftSide/PickRow/PickRow';


class PlayerSearchSide extends Component {

    state = {
        searchQuery: '',
        searchResults: [],
        showing: "playerSearch"
    };

    toggleSearchResults = (e) => {
        const toggleTo = e.target.value;

        if(this.state.showing !== e.target.value) {
            this.setState((prevState) => ({
                showing: toggleTo
            }));

            this.setState((currState) => ({
                searchQuery: ""
            }));
        }
    };

    updateQuery = (searchQuery) => {
        this.setState((currState) => ({
            searchQuery,
        }));
    };


    render() {
        const { players, focusPick, teams } = this.props;

        if(!players) {
            return (
                <div>Players not found...</div>
            )
        }

        let allPlayers = [];
        for(let player in players) {
            allPlayers = [...allPlayers, players[player]];
        }

        let allTeams = [];
        for(let team in teams) {
            allTeams = [...allTeams, teams[team]];
        }

        let filteredSearchResults = this.state.showing === "playerSearch"
            ? allPlayers.filter((player) => {
                return player.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
            })
            : allTeams.filter((team) => {
                return team.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
            });

        const playerSearchClass = this.state.showing === "playerSearch" ? 'showing' : 'notShowing';
        const teamSearchClass = this.state.showing === "teamSearch" ? 'showing' : 'notShowing';

        return (
            <div className="d-flex flex-column col-12 pl-0 pr-0">
                <h3 className="text-center mb-4">EDIT PICK</h3>
                <PickRow pick={focusPick} focusPick={true} />

                <button className={`searchToggle ${playerSearchClass}`} value={"playerSearch"} onClick={this.toggleSearchResults}>Edit Player</button>
                <button className={`searchToggle ${teamSearchClass}`}  value={"teamSearch"} onClick={this.toggleSearchResults}>Edit Team</button>

                <hr />

                <SearchBar query={this.state.searchQuery} updateQuery={(searchQuery) => {
                    this.updateQuery(searchQuery)
                }}/>
                <PlayerSearchList searchResults={filteredSearchResults} type={ this.state.showing } searchQuery={this.state.searchQuery}/>
            </div>
        )
    }
}

function mapStateToProps({  players, focusPick, picks, teams }) {

    const focusPickToEdit = picks[focusPick];

    return {
        players: players ? players : "",
        focusPick: focusPickToEdit,
        teams: teams ? teams : ""
    }
}

export default connect(mapStateToProps)(PlayerSearchSide);