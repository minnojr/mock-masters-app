import React, { Component } from 'react';
import { connect } from "react-redux";
import { editPickPlayer, editPickTeam } from "../../../actions/picks";
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

        const { result, type } = this.props;

        return (
            <div>
                <div className="d-flex p-3 col-12 ">
                    {type === 'playerSearch' &&
                        <span>
                            { result.name }, { result.position }, { result.school }, { result.conference }, { result.ofdOrDef }
                            <button className="add-btn pt-0 pb-0 pr-2 pl-2 ml-3" onClick={this.selectPlayerForPick}>
                                Select Player +
                            </button>
                        </span>
                    }

                    {type === 'teamSearch' &&
                        <span>
                            { result.name }
                            <button className="add-btn pt-0 pb-0 pr-2 pl-2 ml-3" onClick={this.selectTeamForPick}>
                                Select Team +
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
