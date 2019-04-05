import React, { Component } from 'react';
import { connect } from "react-redux";
import { editPick } from "../../../actions/picks";
import './playerrow.css'

class PlayerRow extends Component {

    selectPlayerForPick = () => {
        const { focusPick, player } = this.props;

        this.props.dispatch(editPick(focusPick, player.id))
    };

    render() {

        const { player } = this.props;

        return (
            <div>
                <div className="d-flex p-3 col-12 ">
                    <span>
                        { player.name }, { player.position }, { player.school }, { player.conference }, { player.ofdOrDef }
                    </span>
                    <button className="pt-0 pb-0 pr-2 pl-2 ml-3" onClick={this.selectPlayerForPick}>
                        Draft +
                    </button>
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
