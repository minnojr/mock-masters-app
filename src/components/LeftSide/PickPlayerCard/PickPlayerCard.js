import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import './pickPlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { setFocusPick } from "../../../actions/focusPick";
import { onEditPick } from "../../../actions/toggleMobile";

class PickPlayerCard extends PureComponent {

    handleEditClick = () => {
        const { isMobile, focusPick } = this.props;
        this.props.dispatch(setFocusPick(this.props.pickId));

        console.log("Is mobile?");
        console.log(isMobile);

        console.log("Focus Pick?");
        console.log(focusPick);

          if (isMobile && !focusPick) {
              this.props.dispatch(onEditPick(true))
          }
    };

    render() {

        const { focusPick, player, pick } = this.props;

        let editablePick = focusPick ? "" : "editablePick";

        return (
            <div className={`d-flex card p-3 col-8 md-card br5 ${editablePick}`} onClick={this.handleEditClick}>
                <span className="info">
                    <span className="player-name">{ player.name }</span>
                    <span className="player-info">{ player.position }</span>
                    <span className="player-info">{ player.school }</span>
                    <span className="player-info">Score: { pick.pickScore }</span>
                    {/*<span className="player-info">{ player.conference }</span>*/}
                    {/*<span className="player-info">{ player.offOrDef }</span>*/}
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

function mapStateToProps({ picks, players, firestore }, { pickId }) {
    const pick = picks[pickId];
    const player = players[pick.playerId];
    const emptyObj = {};
    const liveDraft = firestore.ordered.liveDraft ? firestore.ordered.liveDraft[0] : emptyObj;

    return {
        pick,
        player: player ? player : emptyObj,
        liveDraft
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'liveDraft' }
    ])
)(PickPlayerCard);