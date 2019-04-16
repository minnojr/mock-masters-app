import React, {Fragment, PureComponent} from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { signOut } from "../../../actions/authedUser";

import './playersearchside.css'

import PlayerSearchList from '../PlayerSearchList/PlayerSearchList';
import SearchBar from '../SearchBar/SearchBar'
import PickRow from '../../LeftSide/PickRow/PickRow';
import MediaQuery from "react-responsive";


class PlayerSearchSide extends PureComponent {

    componentDidMount() {
        window.scrollTo(0,0);
    }

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

    handleSignOut = () => {
        this.props.dispatch(signOut());
    };


    render() {
        const { players, focusPick, teams, user } = this.props;

        if(!players) {
            return (
                <div>Players not found...</div>
            )
        }

        let playersArr = [];
        for(let player in players) {
            players[player].id = player;
            playersArr = [...playersArr, players[player]];
        }

        let allPlayers = playersArr.filter((p) => {
            return p.name !== undefined;
        }).sort((a, b) => a.rank -  b.rank);


        let allTeams = [];
        for(let team in teams) {
            teams[team].id = team;
            allTeams = [...allTeams, teams[team]];
        }

        // TO DO HERE --------------------->
        // GET ALL PICKS
        // ADD FILTER BELOW FOR ANY PLAYERS THAT HAVE SAME ID AS A PICK ID

        let filteredSearchResults = [];
        if(this.state.showing === "playerSearch") {
            filteredSearchResults = allPlayers.filter((player) => {
                const a = player.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase());
                const ZERO = '0';
                const b = player.rank !== ZERO;


                return a && b;
            })
        }  else {
            filteredSearchResults = allTeams.filter((team) => {
                return team.name.trim().toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
            });
        }

        const playerSearchClass = this.state.showing === "playerSearch" ? 'showing' : 'notShowing';
        const teamSearchClass = this.state.showing === "teamSearch" ? 'showing' : 'notShowing';


        return (
            <Fragment>
                <MediaQuery query="(min-width: 900px)">
                    <div className="app-side right-side">
                        <div className="nav-right">
                            { user.admin
                                ? <a href="/mm-only/admin">Admin Console</a>
                                : ""
                            }
                            <a onClick={this.handleSignOut}>SIGN OUT</a>
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
                        <span className="ml-4 player-row-conference">DRAFT</span>
                            {/*<span className="player-row-offOrDef">O/D</span>*/}
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
                </MediaQuery>









                <MediaQuery query="(max-width: 900px)">

                    <div className="d-flex flex-column app-side mobile p-0">
                        <div className="nav-right">
                            { user.admin
                                ? <a href="/mm-only/admin">Admin Console</a>
                                : ""
                            }
                            <a onClick={this.handleSignOut}>SIGN OUT</a>
                        </div>

                        <div className="d-flex justify-content-center mb-5">
                            <button
                                className={this.props.showing === "leftSide" ? 'showing' : 'notShowing'}
                                value={"leftSide"}
                                onClick={this.props.toggleDashboards}>
                                My Mock Draft
                            </button>
                            <button
                                className={this.props.showing === "rightSide" ? 'showing' : 'notShowing'}
                                value={"rightSide"}
                                onClick={this.props.toggleDashboards}>
                                Player Search
                            </button>
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
                        <span className="ml-4 player-row-conference">DRAFT</span>
                            {/*<span className="player-row-offOrDef">O/D</span>*/}
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

                </MediaQuery>

            </Fragment>
        )
    }
}

function mapStateToProps({ focusPick, picks, teams, players, firebase }) {
    const emptyStr= "";
    const emptyObj = {};
    // console.log(firebase.profile);

    return {
        user: firebase.profile ? firebase.profile : emptyObj,
        players,
        focusPick,
        picks,
        teams: teams ? teams : emptyStr
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(PlayerSearchSide);