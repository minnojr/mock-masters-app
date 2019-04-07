import React, { Component } from 'react';
import { connect } from "react-redux";
import { editPickTeam } from "../../../actions/picks";
import './pickteamcard.css'

class PickTeamCard extends Component {

    state = {
        listOpen: false
    };

    handleEditTeam (team)  {

        const { pickId } = this.props;

        this.props.dispatch(editPickTeam(pickId, team));
    };

    toggleList = () => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    };

    render() {

        const { team, pickNum, focusPick, allTeams } = this.props;
        const { listOpen } = this.state;
        let abv = team.abbrev;

        let p = require('../../../assets/img/teams/' + abv + '-team.png');

        let key = 0;
        return (
            <div className="d-flex card p-3 col-4 mr-2 md-card br5">
                <span className="info">
                    <span className="pick-num mr-4">{pickNum}</span>
                    <span>
                        <img src={p} height="75" width="75" alt="team-logo"/>
                    </span>
                </span>
            </div>
        )
    }
}

function mapStateToProps({ teams }, { teamId, pickId }) {
    let teamArr = [];

    for(let team in teams) {
        teamArr.push(teams[team]);
    }

    return {
        team: teams[teamId] ? teams[teamId] : "",
        allTeams: teamArr,
        pickId,
        teamId
    }
}

export default connect(mapStateToProps)(PickTeamCard);
//
// <div className="mr-3 card p-3 col-4 md-card">
//     { !focusPick &&
//     <span>
//                         {pickNum} | {team.name}
//                     </span>
//     }
//     { focusPick &&
//     <span>
//                         <span onClick={() => this.toggleList()}>
//                             {pickNum} | { team.name }
//                             {listOpen
//                                 ? "OPEN"
//                                 : "CLOSE"
//                             }
//                         </span>
//         { listOpen &&
//         <ul className="card edit-team-list">
//             {allTeams.map((team) => (
//                 <li className="dd-list-item" key={key++} onClick={() => this.handleEditTeam(team.id)}>{team.name}</li>
//             ))}
//         </ul>
//         }
//                     </span>
//     }
