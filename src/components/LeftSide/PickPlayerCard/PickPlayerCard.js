import React, {Fragment, PureComponent} from 'react';
import { connect } from "react-redux";
import './pickPlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { setFocusPick } from "../../../actions/focusPick";
import { onEditPick } from "../../../actions/toggleMobile";
import { handleEditPickPlayer } from "../../../actions/picks";
import MediaQuery from "react-responsive";

class PickPlayerCard extends PureComponent {

    handleEditClick = () => {
        const { isMobile, focusPick } = this.props;
        this.props.dispatch(setFocusPick(this.props.pickId));

          if (isMobile && !focusPick) {
              this.props.dispatch(onEditPick(true))
          }
    };

    handleRemoveClick = () => {
      // VWOHUogWGWpun5xWWnaR
        const emptyPlayer = "VWOHUogWGWpun5xWWnaR";
        this.props.dispatch(handleEditPickPlayer(this.props.pickId, emptyPlayer));
    };

    returnComputerContent = () => {

        const { focusPick, player } = this.props;

        // let editablePick = focusPick ? "focus_pick" : "editablePick";
        let editablePick = "editablePick";

        if (!focusPick) {
            return (
                <div ref={editablePick} draggable="false" className={`d-flex card col-8 md-card br5 ${editablePick}`} onClick={this.handleEditClick}>
                    <span className="info">
                        <span className="player-name">{ player.name }</span>
                        <span className="player-info">{ player.position }</span>
                        <span className="player-info">{ player.school }</span>
                        {/*<span className="player-info">Score: { pick.pickScore }</span>*/}
                        {/*<span className="player-info">{ player.conference }</span>*/}
                        {/*<span className="player-info">{ player.offOrDef }</span>*/}
                    </span>
                    <span className="editPickLabel">
                        <span className="info-2">
                            {/*<span className="hover-player-name">EDIT</span>*/}
                            <span className="hover-edit-pick"><FontAwesomeIcon icon="user-edit" /></span>
                        </span>
                    </span>
                </div>
            )
        } else {
            return (
                <div ref={editablePick} draggable="false" className={`d-flex remove-pick card col-8 md-card br5 ${editablePick}`} onClick={this.handleRemoveClick}>
                    <span className="info">
                        <span className="player-name">{ player.name }</span>
                        <span className="player-info">{ player.position }</span>
                        <span className="player-info">{ player.school }</span>
                        {/*<span className="player-info">Score: { pick.pickScore }</span>*/}
                        {/*<span className="player-info">{ player.conference }</span>*/}
                        {/*<span className="player-info">{ player.offOrDef }</span>*/}
                    </span>
                    <span className="editPickLabel">
                        <span className="info-2">
                            {/*<span className="hover-player-name">REMOVE</span>*/}
                            <span className="hover-remove-pick"><FontAwesomeIcon icon="trash" /></span>
                        </span>
                    </span>
                </div>
            )
        }
    };

    returnMobileContent = () => {
        const { focusPick, player } = this.props;

        let editablePick = focusPick ? "focus_pick" : "editablePick";

            return (
                <div ref={editablePick} draggable="false" className={`d-flex card col-8 md-card br5 ${editablePick}`}
                     onClick={this.handleEditClick}>
                    <span className="info">
                        <span className="player-name">{player.name}</span>
                        <span className="player-info">{player.position}</span>
                        <span className="player-info">{player.school}</span>
                        {/*<span className="player-info">Score: { pick.pickScore }</span>*/}
                        {/*<span className="player-info">{ player.conference }</span>*/}
                        {/*<span className="player-info">{ player.offOrDef }</span>*/}
                    </span>
                    <span className="editPickLabel">
                        <span className="info-2">
                            {/*<span className="hover-player-name">EDIT</span>*/}
                            <span className="hover-edit-pick"><FontAwesomeIcon icon="user-edit"/></span>
                        </span>
                    </span>
                </div>
            )
    }

    render() {

        // let editablePick = "editablePick";

        return (
            <Fragment>
                <MediaQuery query="(min-width: 901px)">
                    {this.returnComputerContent()}
                </MediaQuery>
                <MediaQuery query="(max-width: 900px)">
                    {this.returnMobileContent()}
                </MediaQuery>
            </Fragment>
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