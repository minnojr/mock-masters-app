import React, { Component } from 'react';
import { connect } from "react-redux";

class PickTeamCard extends Component {

    render() {

        const { team, pickNum } = this.props;

        return (
            <div className="mr-3 card p-3 col-3 md-card">
                {pickNum} | { team.name }
            </div>
        )
    }
}

function mapStateToProps({ teams }, { teamId }) {

    return {
        team: teams[teamId] ? teams[teamId] : ""
    }
}

export default connect(mapStateToProps)(PickTeamCard);