import React, { Component } from 'react';
import { connect } from "react-redux";
import './pickPlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setFocusPick } from "../../../actions/focusPick";

class PickPlayerCard extends Component {

    handleEditClick = () => {
      this.props.dispatch(setFocusPick(this.props.pickId))
    };

    render() {

        const { player, focusPick } = this.props;

        let editablePick = focusPick ? "" : "editablePick";

        return (
            <div className={`d-flex card p-3 col-8 md-card br5 ${editablePick}`} onClick={this.handleEditClick}>
                <span className="info">
                    <span className="player-name">{ player.name }</span>
                    <span className="player-info">{ player.position.toUpperCase() }</span>
                    <span className="player-info">{ player.school.toUpperCase() }</span>
                    <span className="player-info">{ player.conference.toUpperCase() }</span>
                    <span className="player-info">{ player.offOrDef.toUpperCase() }</span>
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

function mapStateToProps({ players }, { playerId }) {
    return {
        player: players[playerId] ? players[playerId] : ""
    }
}

export default connect(mapStateToProps)(PickPlayerCard);