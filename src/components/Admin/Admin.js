import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import { handleAddAllPlayers, handleAddPlayer } from "../../actions/players";
import { handleAddAllTeams } from "../../actions/teams";
import { handleAddMock } from "../../actions/mockdrafts";
import { handleGenerateMockPicks } from "../../actions/picks";

import EditMock from './EditMock';

import { players } from "../../utils/player-prospect-data";
import { teams } from "../../utils/team-data";

class Admin extends Component {

    state = {
        playerName: "",
        playerPosition: "",
        playerSchool: "",
        playerConf: "",
        playerOffOrDef: "",
        setFocusMock: "",
    };

    addPicksToMock = (mockId) => {
        // create picks
        this.props.dispatch(handleGenerateMockPicks(mockId));
    };

    handleClickAddNewMock =  () => {
        this.props.dispatch(handleAddMock());
    };


    populatePlayersCollection = (e) => {
        e.preventDefault();

        let playerArr = [];
        let rank = 1;
        for(let p in players) {
            let play = players[p];

            let playerObj = {
                "name": play.name,
                "position": play.position,
                "offOrDef": play.offOrDef,
                "school": play.school,
                "conference": play.conference,
                "rank": rank++,
                "createdAt": new Date()
            };

            playerArr.push(playerObj);
        }
        this.props.dispatch(handleAddAllPlayers(playerArr));
    };

    populateTeamsCollection = (e) => {
        e.preventDefault();

        let teamArr = [];
        for(let t in teams) {
            let team = teams[t];

            let teamObj = {
                ...team,
                "createdAt": new Date()
            };

            teamArr.push(teamObj);
        }
        this.props.dispatch(handleAddAllTeams(teamArr));
    };

    newMockAndPicksInstance = (e) => {
        e.preventDefault();
        console.log("1111111");


    };

    addNewPlayer = (player) => {
        // e.preventDefault();
        // const { playerName, playerPosition, playerSchool, playerConf, playerOffOrDef } = this.state;

        // let player = {
        //     name: playerName,
        //     position: playerPosition,
        //     school: playerSchool,
        //     conference: playerConf,
        //     offOrDef: playerOffOrDef
        // };

        this.props.dispatch(handleAddPlayer(player));
    };

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({
            playerName: e.target.value
        })
    };

    handlePositionChange = (e) => {
        e.preventDefault();
        this.setState({
            playerPosition: e.target.value
        })
    };

    handleSchoolChange = (e) => {
        e.preventDefault();
        this.setState({
            playerSchool: e.target.value
        })
    };

    handleConfChange = (e) => {
        e.preventDefault();
        this.setState({
            playerConf: e.target.value
        })
    };

    handleOffOrDefChange = (e) => {
        e.preventDefault();
        this.setState({
            playerOffOrDef: e.target.value
        })
    };

    render() {

        const { playerName, playerPosition, playerSchool, playerConf, playerOffOrDef } = this.state;

        // console.log(this.props.firebase);

        return (
            <div className="d-flex w-25 m-5 flex-column">
                <h4>Add New Player Prospect</h4>
                <form className="d-flex flex-column" onSubmit={this.newMockAndPicksInstance}>
                    <label>Player Name</label>
                    <input
                        value={ playerName }
                        onChange={this.handleNameChange}
                        placeholder="Name"
                    />

                    <hr />

                    <label>Player Position</label>
                    <input
                        value={ playerPosition }
                        onChange={this.handlePositionChange}
                        placeholder="Position"
                    />

                    <hr />

                    <label>Player School</label>
                    <input
                        value={ playerSchool }
                        onChange={this.handleSchoolChange}
                        placeholder="School"
                    />

                    <hr />

                    <label>Player Conference</label>
                    <input
                        value={ playerConf }
                        onChange={this.handleConfChange}
                        placeholder="Conference"
                    />

                    <hr />

                    <label>Player Off or Def</label>
                    <input
                        value={ playerOffOrDef }
                        onChange={this.handleOffOrDefChange}
                        placeholder="Offense or Defense"
                    />

                   <button type="submit">Add Player</button>
                </form>

                <br />
                <br />
                <button onClick={this.populatePlayersCollection}>Populate Players To DB</button>

                <br />
                <br />
                <button onClick={this.handleClickAddNewMock}>Add New Mock Draft</button>
                <br />
                <br />

                <div className="card">
                    <h5> Mock Drafts </h5>
                    <div>
                        { this.props.mockdrafts && this.props.mockdrafts.map((md) => {
                            if( md.picks.length < 2) {
                            // console.log(md.picks);
                                return (
                                    <EditMock key={md.id} addPicksToMock={(param) => this.addPicksToMock(param)} mockdraftId={md.id}/>
                                )
                            }
                        })
                        }
                        {/*<button on></button>*/}
                    </div>
                    ---> { this.state.setFocusMock}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("\n\n*********\n\n");
    let teams = state.firestore.ordered.teams;
    let mockdrafts = state.firestore.ordered.mockdrafts;
    // console.log(mockdrafts)

    return {
        players: state.firestore.ordered.players,
        mockdrafts: mockdrafts ? mockdrafts : [],
        teams: teams ? teams : []
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(),
    firestoreConnect([
        { collection : 'players' },
        { collection : 'mockdrafts' },

    ])
)(Admin);