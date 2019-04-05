import React, { Component } from 'react';
import { connect } from "react-redux";
import './pickPlayerCard.css'

import { setFocusPick } from "../../../actions/focusPick";

class PickPlayerCard extends Component {

    handleEditClick = () => {
      this.props.dispatch(setFocusPick(this.props.pickId))
    };

    render() {

        const { player, focusPick } = this.props;

        let editablePick = focusPick ? "" : "editablePick";

        return (
            <div className={`d-flex card p-3 col-9 md-card ${editablePick}`} onClick={this.handleEditClick}>
                <span className="info">
                    { player.name }, { player.position }, { player.school }, { player.conference }, { player.ofdOrDef }
                </span>
                <span className="editPickLabel">
                    <center>EDIT PICK</center>
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