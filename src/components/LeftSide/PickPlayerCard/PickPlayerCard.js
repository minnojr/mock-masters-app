import React, { Component } from 'react';
import { connect } from "react-redux";
import './pickPlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setFocusPick } from "../../../actions/focusPick";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class PickPlayerCard extends Component {
    componentDidMount() {

    }

    handleEditClick = () => {
      this.props.dispatch(setFocusPick(this.props.pickId))
    };

    render() {

        const { focusPick, player } = this.props;

        let editablePick = focusPick ? "" : "editablePick";

        return (
            <div className={`d-flex card p-3 col-8 md-card br5 ${editablePick}`} onClick={this.handleEditClick}>
                <span className="info">
                    <span className="player-name">{ player.name }</span>
                    <span className="player-info">{ player.position }</span>
                    <span className="player-info">{ player.school }</span>
                    <span className="player-info">{ player.conference }</span>
                    <span className="player-info">{ player.offOrDef }</span>
                </span>
                <span className="editPickLabel">
                    <span className="info-2">
                        <span className="hover-player-name">EDIT PICK</span>
                        <span className="hover-edit-pick"><FontAwesomeIcon icon="user-edit" /></span>
                    </span>
                </span>
            </div>
        )
    }
}

function mapStateToProps({ picks, players }, { pickId }) {
    const pick = picks[pickId];
    const player = players[pick.playerId];
    const emptyObj = {};

    return {
        player: player ? player : emptyObj
    }
}

export default connect(mapStateToProps)(PickPlayerCard);