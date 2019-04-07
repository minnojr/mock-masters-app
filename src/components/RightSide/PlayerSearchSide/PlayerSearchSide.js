import React, { Component } from 'react';
import { connect } from "react-redux";

import './playersearchside.css'

import PlayerSearchList from '../PlayerSearchList/PlayerSearchList';
import SearchBar from '../SearchBar/SearchBar'
import PickRow from '../../LeftSide/PickRow/PickRow';
import Nav from '../../Nav/Nav'


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
            <div className="app-side right-side">

                <div className="nav-right">
                    SIGN OUT
                </div>

                {/*<h3 className="text-center mb-4">EDIT PICK</h3>*/}
                <PickRow pick={focusPick} focusPick={true} />
                {/*<hr />*/}

                <div className="searchBtns d-flex mt-3 mb-2 ml-3 mr-3 flex-row justify-content-center">
                    <button className={`searchToggle ${teamSearchClass}`}  value={"teamSearch"} onClick={this.toggleSearchResults}>Edit Team</button>
                    <button className={`searchToggle ${playerSearchClass}`} value={"playerSearch"} onClick={this.toggleSearchResults}>Edit Player</button>
                </div>

                {/*<hr />*/}

                <SearchBar type={this.state.showing} query={this.state.searchQuery} updateQuery={(searchQuery) => {
                    this.updateQuery(searchQuery)
                }}/>
                { this.state.showing === "playerSearch" &&
                    <span className="d-flex flex-row player-row-header">
                        <span className="player-row-num">#</span>
                        <span className="player-row-name">PLAYER</span>
                        <span className="player-row-position">POS</span>
                        <span className="player-row-school">SCHOOL</span>
                        <span className="player-row-conference">CONF</span>
                        <span className="player-row-offOrDef">O/D</span>
                    </span>
                }

                {this.state.showing === "teamSearch" &&
                    <span className="d-flex flex-row player-row-header pl-3">
                        <span className="player-row-num pl-3">#</span>
                        <span className="team-row-name">TEAM</span>
                    </span>
                }
                <div className="search-container">
                    <PlayerSearchList searchResults={filteredSearchResults} type={ this.state.showing } searchQuery={this.state.searchQuery}/>
                </div>
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