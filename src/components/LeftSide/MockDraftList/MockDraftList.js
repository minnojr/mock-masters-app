import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftlist.css';
import PickRow from '../PickRow/PickRow';
import GradePickBtn from './GradePickBtn';

import { handleGradePick } from "../../../actions/picks";


class MockDraftList extends Component {

    handleGradeClick = (pick, index) => {
        console.log("Grading.... ");
        console.log(pick);
        this.props.dispatch(handleGradePick(pick, index));
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
                                <li key={key++} >
                                    { mockdraft.mastermock
                                        ? <GradePickBtn pickNum={key} pick={pick} onHandleClickBtn={this.handleGradeClick} />
                                        // ? <GradePickBtn />
                                        : null
                                    }
                                    <PickRow
                                        pickId={pick}
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

export default connect()(MockDraftList);