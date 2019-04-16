import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import './mockdraftside.css'
import moize from 'moize';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import MockDraftList from '../MockDraftList/MockDraftList'
import MediaQuery from "react-responsive";
import {onEditPick} from "../../../actions/toggleMobile";

class MockDraftSide extends PureComponent {

    componentDidMount() {
        this.props.dispatch(onEditPick(false))
    }

    render() {

        return (
            <Fragment>
                <MediaQuery query="(min-width: 900px)">
                    <div className="app-side left-side">
                        <div className="nav-left">MOCK MASTERS</div>

                        <h3 className="text-center mb-4 md-header">MOCK DRAFT</h3>
                        <h6 className="text-center mb-4">Score: {this.props.mockdraft.draftScore}</h6>

                        <MockDraftList
                            mockdraft={this.props.mockdraft}
                            isMobile={this.props.isMobile} />
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-width: 900px)">
                    <div className="d-flex flex-column app-side mobile p-0">
                        <div className="nav-left">MOCK MASTERS</div>

                            <div className="d-flex justify-content-center mb-5">
                                <button
                                    className={this.props.showing === "leftSide" ? 'showing' : 'notShowing'}
                                    value={"leftSide"}
                                    onClick={this.props.toggleDashboards}>
                                    My Mock Draft
                                </button>
                                <button
                                    className={this.props.showing === "rightSide" ? 'showing' : 'notShowing'}
                                    value={"rightSide"}
                                    onClick={this.props.toggleDashboards}>
                                    Player Search
                                </button>
                            </div>

                            <h3 className="text-center mb-4 md-header">MOCK DRAFT</h3>
                            <h6 className="text-center mb-4">Score: {this.props.mockdraft.draftScore}</h6>

                            <MockDraftList
                                mockdraft={this.props.mockdraft}
                                isMobile={this.props.isMobile} />
                    </div>

                </MediaQuery>

            </Fragment>

        )
    }
}

function mapStateToProps({  authedUser, mockdrafts, firestore }, { isMasterMock }) {

    let mockdraft;
    const empty = {};
    if(isMasterMock) {
        mockdraft = firestore.ordered.mastermock ? firestore.ordered.mastermock[0]  : empty;
    } else {
        const mid = Object.keys(mockdrafts)[0];
        mockdraft = mockdrafts[mid] ? mockdrafts[mid] : empty;
    }

    return {
        mockdraft,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'mastermock' }
    ])
)(MockDraftSide);