import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import './pickteamcard.css'

class PickTeamCard extends PureComponent {

    render() {

        const { team, pickNum } = this.props;

        return (
            <div className="d-flex card p-3 col-4 mr-2 md-card br5">
                <span className="info team-card">
                    <span className="pick-num mr-4">{pickNum}</span>
                    <span>
                        <img src={team.imageUrl} alt="team-logo"/>
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
    const zero = 0;

    return {
        pickNum : pickNum ? pickNum : zero,
        team : team ? team : emptyObj
    }
}

export default connect(mapStateToProps)(PickTeamCard);
