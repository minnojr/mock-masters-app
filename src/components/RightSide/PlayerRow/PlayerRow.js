import React, { Component } from 'react';
import { connect } from "react-redux";
import { editPickPlayer, editPickTeam } from "../../../actions/picks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './playerrow.css'


class PlayerRow extends Component {

    selectPlayerForPick = () => {
        const { focusPick, result } = this.props;
        this.props.dispatch(editPickPlayer(focusPick, result.id))
    };

    selectTeamForPick = () => {
        const { focusPick, result } = this.props;
        this.props.dispatch(editPickTeam(focusPick, result.id))
    };

    render() {

        const { result, type, orderNum } = this.props;

        return (
            <div>
                <div className="d-flex p-3 flex-row">
                    {type === 'playerSearch' &&
                        <span className="d-flex flex-row player-row">
                            <span className="player-row-num">{ orderNum }.</span>
                            <span className="player-row-name">{ result.name }</span>
                            <span className="player-row-position">{ result.position }</span>
                            <span className="player-row-school">{ result.school }</span>
                            <span className="player-row-conference">{ result.conference }</span>
                            <span className="player-row-offOrDef">{ result.offOrDef }</span>
                            <button className="add-btn pt-1 pb-1 pr-2 pl-2 ml-3" onClick={this.selectPlayerForPick}>
                                <FontAwesomeIcon icon="plus" />
                            </button>
                        </span>
                    }

                    {type === 'teamSearch' &&
                    <span className="d-flex flex-row player-row">
                            <span className="player-row-num">{ orderNum }.</span>
                            <span className="team-row-name">{ result.name }</span>
                            <button className="add-btn pt-1 pb-1 pr-2 pl-2 ml-3" onClick={this.selectTeamForPick}>
                                <FontAwesomeIcon icon="plus" />
                            </button>
                        </span>
                    }
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

export default connect(mapStateToProps)(PlayerRow);
