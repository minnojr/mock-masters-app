import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftlist.css';
import PickRow from '../PickRow/PickRow';
import GradePickBtn from './GradePickBtn';

import { handleGradePick } from "../../../actions/picks";
import { handleSwapPickTeams } from "../../../actions/picks";


class MockDraftList extends Component {

    state = {
        toPickId: '',
        fromPickId: ''
    }

    handleGradeClick = (pick, index) => {
        console.log("Grading.... ");
        console.log(pick);
        this.props.dispatch(handleGradePick(pick, index));
    };

    onDragStart = (e,v) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData( "text/plain", v );
        this.setState({ fromPickId: v });
    }

    allowDrop = ev =>{
        ev.preventDefault();
    };

    onDrop = (e, v) =>{
        e.preventDefault();
        if(!this.state.fromPickId) {
            // this.props.dispatch(handleSwapPickTeams(v, this.props.focusPick));
            return;
        }
        const data = e.dataTransfer.getData("text/plain");

        this.props.dispatch(handleSwapPickTeams(v, this.state.fromPickId))
    };

    render() {
        const { mockdraft } = this.props;

        if(!mockdraft.picks) {
            return (
                <div>This Mock Draft doesn't exits...</div>
            )
        } else {
            let key=0;
            return (
                <div className="mockdraft-container">
                    <ul className="mockdraftlist">

                        {mockdraft.picks.map((pick) =>
                        {
                            return (
                                <li
                                    draggable="true"
                                    onDragStart={ (e) => this.onDragStart(e, pick) }
                                    onDragOver={this.allowDrop}
                                    onDrop={ (e) => this.onDrop(e, pick) }
                                    key={key++} >
                                    { mockdraft.mastermock
                                        ? <GradePickBtn pickNum={key} pick={pick} onHandleClickBtn={this.handleGradeClick} />
                                        // ? <GradePickBtn />
                                        : null
                                    }
                                    <PickRow
                                        pickId={pick}
                                        pickNum={ key }
                                        isMobile={this.props.isMobile} />
                                </li>
                            )
                        })}
                    </ul>

                </div>
            )
        }
    }
};

function mapStateToProps({ focusPick }) {

    return {
        focusPick
    }
}

export default connect(mapStateToProps)(MockDraftList);