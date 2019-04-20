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
        const { players, focusPick, teams, user, pickNum } = this.props;

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
        // const teamSearchClass = this.state.showing === "teamSearch" ? 'showing' : 'notShowing';

        let teamSearchClass = 'nowShowing';
        if(this.state.showing === "teamSearch") {
            teamSearchClass = 'showing'
            filteredSearchResults.sort((a, b) => a.order - b.order );
        }

        const leftShowing = this.props.showing === false ? 'showing' : 'notShowing';
        const rightShowing = this.props.showing === true ? 'showing' : 'notShowing';

        return (
            <Fragment>
                <MediaQuery query="(min-width: 901px)">
                    <div className="app-side right-side">
                        <div className="nav-side nav-right">
                            { user.admin
                                ? <a href="/mm-only/admin">Admin Console</a>
                                : ""
                            }
                            <a onClick={this.handleSignOut}><h6>SIGN OUT</h6></a>
                        </div>

                        <PickRow pickId={focusPick} focusPick={true} />

                        <div className="edit-pick mt-3 mb-2 ml-3 mr-3 flex-row justify-content-center">
                            <button className={`left searchToggle ${teamSearchClass}`}  value={"teamSearch"} onClick={this.toggleSearchResults}>Mock Trade</button>
                            <button className={`right searchToggle ${playerSearchClass}`} value={"playerSearch"} onClick={this.toggleSearchResults}>Mock Pick</button>
                        </div>


                        <SearchBar type={this.state.showing} query={this.state.searchQuery} updateQuery={(searchQuery) => {
                            this.updateQuery(searchQuery)
                        }}/>
                        { this.state.showing === "playerSearch" &&
                        <span className="player-row-header">
                        <span className="player-row-name pl-2">Players</span>
                        {/*<span className="player-row-num">#</span>*/}
                        {/*<span className="player-row-name">PLAYER</span>*/}
                        {/*<span className="player-row-position">POS</span>*/}
                        {/*<span className="player-row-school">SCHOOL</span>*/}
                        {/*<span className="player-row-conference">CONF</span>*/}
                        {/*<span className="ml-4 player-row-conference">DRAFT</span>*/}
                            {/*<span className="player-row-offOrDef">O/D</span>*/}
                    </span>
                        }

                        {this.state.showing === "teamSearch" &&
                        <span className="d-flex flex-row player-row-header pl-3">
                        <span className="player-row-name pl-2">Teams</span>
                        {/*<span className="team-row-name">TEAM</span>*/}
                    </span>
                        }
                        <div className="search-container">
                            <PlayerSearchList searchResults={filteredSearchResults} type={ this.state.showing } searchQuery={this.state.searchQuery}/>
                        </div>
                    </div>
                </MediaQuery>






                <MediaQuery query="(max-width: 900px)">

                    <div className="d-flex flex-column app-side mobile p-0">
                        {/*<div className="nav-right">*/}
                        {/*</div>*/}

                        <div className="nav-side nav-right">
                            <a onClick={this.handleSignOut}><h6>SIGN OUT</h6></a>
                            <a className="mm-nav-header"><h6>MOCK MASTERS</h6></a>
                            { user.admin
                                ? <a href="/mm-only/admin">Admin Console</a>
                                : ""
                            }

                        </div>
                        <div className="mobile-nav-toggle main_nav">
                            <button
                                className={`left ${leftShowing}`}
                                value={"leftSide"}
                                onClick={this.props.toggleDashboards}>
                                MY DRAFT
                            </button>
                            <button
                                className={`right ${rightShowing}`}
                                value={"rightSide"}
                                onClick={this.props.toggleDashboards}>
                                EDIT PICK
                            </button>
                        </div>

                        <div className="edit-pick">
                            {/*<div className=" ml-1 text-center pickNum">Round: 1</div>*/}
                            {/*<div className=" ml-1 text-center pickNum">Pick: {pickNum}</div>*/}
                            <button className={`left searchToggle ${teamSearchClass}`}  value={"teamSearch"} onClick={this.toggleSearchResults}>Mock Trade</button>
                            <button className={`right searchToggle ${playerSearchClass}`} value={"playerSearch"} onClick={this.toggleSearchResults}>Mock Pick</button>
                        </div>

                        <PickRow pickId={focusPick} focusPick={true} />

                        <SearchBar type={this.state.showing} query={this.state.searchQuery} updateQuery={(searchQuery) => {
                            this.updateQuery(searchQuery)
                        }}/>
                        { this.state.showing === "playerSearch" &&
                        <span className="player-row-header">
                            <span className="player-row-num pl-2">Players</span>
                            {/*<span className="player-row-name">PLAYER</span>*/}
                            {/*<span className="player-row-position">POS</span>*/}
                            {/*<span className="player-row-school">SCHOOL</span>*/}
                            {/*<span className="player-row-conference">CONF</span>*/}
                            {/*<span className="ml-4 player-row-conference">DRAFT</span>*/}
                                {/*<span className="player-row-offOrDef">O/D</span>*/}
                        </span>
                        }

                        {this.state.showing === "teamSearch" &&
                        <span className="player-row-header">
                            <span className="player-row-num pl-2">Teams</span>
                            {/*<span className="team-row-name">TEAM</span>*/}
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
    const pick = picks[focusPick];
    const team = teams[pick.teamId];
    const pickNum = pick.pickNum;
    // console.log(firebase.profile);

    return {
        user: firebase.profile ? firebase.profile : emptyObj,
        players,
        focusPick,
        picks,
        teams: teams ? teams : emptyStr,
        pickNum
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'players' }
    ])
)(PlayerSearchSide);