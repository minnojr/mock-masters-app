import React, { Component } from 'react';
import { connect } from "react-redux";

import PickPlayerCard from '../PickPlayerCard/PickPlayerCard';
import PickTeamCard from '../PickTeamCard/PickTeamCard'

class PickRow extends Component {

    render() {
        const { pick, focusPick } = this.props;

        if(!pick) {
            return (
                <div>This Pick Row doesn't exits...</div>
            )
        }

        let isFocusPick = false;
        let focusClass = "";

        if(focusPick === pick.id) {
            isFocusPick = true;
            focusClass = "md-focus";
        }

        return (
            <div>
                <div className={`d-flex flex-row col-12 ${focusClass}`}>
                    <PickTeamCard teamId={pick.teamId} pickId={pick.id} pickNum={pick.pickNum} focusPick={isFocusPick}/>
                    <PickPlayerCard playerId={pick.playerId} pickId={pick.id} focusPick={isFocusPick}/>
                </div>
                <hr />
            </div>
        )
    }
}

function mapStateToProps({ focusPick }) {

    return {
        focusPick
    }
}

export default connect(mapStateToProps)(PickRow);