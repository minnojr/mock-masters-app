import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import './playersearchside.css'

import PlayerSearchList from '../PlayerSearchList/PlayerSearchList';
import SearchBar from '../SearchBar/SearchBar'
import PickRow from '../../LeftSide/PickRow/PickRow';
import Nav from '../../Nav/Nav'


class PlayerSearchSide extends Component {

    state = {
        searchQuery: ' ',
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

        // console.log(players);
        let playersArr = [];
        for(let player in players) {
            players[player].id = player;
            // console.log(players[player]);
            playersArr = [...playersArr, players[player]];
        }


        // console.log(playersArr);
        let allPlayers = playersArr.filter((p) => {
            console.log(p);
            return p.name !== undefined;
        }).sort((a, b) => a.rank -  b.rank);


        let allTeams = [];
        for(let team in teams) {
            teams[team].id = team;
            allTeams = [...allTeams, teams[team]];
        }

        let filteredSearchResults = [];
        if(this.state.showing === "playerSearch") {
            filteredSearchResults = allPlayers.filter((player) => {
                return player.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
            })
        }  else {
            filteredSearchResults = allTeams.filter((team) => {
                console.log(team);
                return team.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
            });
        }

        const playerSearchClass = this.state.showing === "playerSearch" ? 'showing' : 'notShowing';
        const teamSearchClass = this.state.showing === "teamSearch" ? 'showing' : 'notShowing';


        return (
            <div className="app-side right-side">

                <div className="nav-right">
                    SIGN OUT
                </div>

                <PickRow pickId={focusPick} focusPick={true} />

                <div className="searchBtns d-flex mt-3 mb-2 ml-3 mr-3 flex-row justify-content-center">
                    <button className={`searchToggle ${teamSearchClass}`}  value={"teamSearch"} onClick={this.toggleSearchResults}>Edit Team</button>
                    <button className={`searchToggle ${playerSearchClass}`} value={"playerSearch"} onClick={this.toggleSearchResults}>Edit Player</button>
                </div>


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

function mapStateToProps({ focusPick, picks, teams, players, firestore }) {

    // const focusPickToEdit = picks[focusPick];
    const emptyStr= "";

    return {
        // players: firestore.ordered.players,
        players,
        focusPick,
        teams: teams ? teams : emptyStr
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(PlayerSearchSide);