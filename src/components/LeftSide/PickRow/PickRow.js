import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import PickPlayerCard from '../PickPlayerCard/PickPlayerCard';
import PickTeamCard from '../PickTeamCard/PickTeamCard'

class PickRow extends PureComponent {

    render() {
        const { pickId, focusPick } = this.props;


        if(!pickId) {
            return (
                <div>This Pick Row doesn't exits...</div>
            )
        }

        let isFocusPick = false;
        let focusClass = "";

        if(focusPick === pickId) {
            isFocusPick = true;
            focusClass = "md-focus";
        }

        return (
            <div>
                <div className={`d-flex flex-row col-12 mb-2 ${focusClass}`}>
                    <PickTeamCard pickId={pickId} pickNum={this.props.pickNum} focusPick={isFocusPick}/>
                    <PickPlayerCard
                        pickId={pickId}
                        focusPick={isFocusPick}
                        isMobile={this.props.isMobile} />
                </div>
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