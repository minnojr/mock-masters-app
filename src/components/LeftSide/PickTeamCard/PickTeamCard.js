import React, { Component } from 'react';
import { connect } from "react-redux";
import { editPickTeam } from "../../../actions/picks";
import './pickteamcard.css'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

class PickTeamCard extends Component {

    render() {

        const { team, pickNum } = this.props;

        return (
            <div className="d-flex card p-3 col-4 mr-2 md-card br5">
                <span className="info">
                    <span className="pick-num mr-4">{pickNum}</span>
                    <span>
                        <img src={team.imageUrl} height="75" width="75" alt="team-logo"/>
                    </span>
                </span>
            </div>
        )
    }
}

function mapStateToProps({ teams, picks }, { teamId, pickId }) {
    const pick = picks[pickId];
    const team = teams[pick.teamId];
    const pickNum = pick.pickNum;
    const emptyObj = {};

    return {
        pickNum : pickNum ? pickNum : 0,
        team : team ? team : emptyObj
    }
}

export default connect(mapStateToProps)(PickTeamCard);
