import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import './mockdraftside.css'

import MockDraftList from '../MockDraftList/MockDraftList'
import MediaQuery from "react-responsive";
import {onEditPick} from "../../../actions/toggleMobile";
import EditableHeader from './EditableHeader'
import {signOut} from "../../../actions/authedUser";


class MockDraftSide extends PureComponent {

    componentDidMount() {
        this.props.dispatch(onEditPick(false));
    }

    handleSignOut = () => {
        this.props.dispatch(signOut());
    };

    render() {

        const { mockdraft, isMobile } = this.props;

        let z = mockdraft.mockName.length;

        const leftShowing = this.props.showing === false ? 'showing' : 'notShowing';
        const rightShowing = this.props.showing === true ? 'showing' : 'notShowing';

        return (
            <Fragment>
                <MediaQuery query="(min-width: 901px)">
                    <div className="app-side left-side">
                        <div className="nav-side nav-left">MOCK MASTERS</div>

                        <EditableHeader className="ml-4 mr-4 mb-0 pb-2 md-header" mid={this.props.mid} value={mockdraft.mockName} />

                        <MockDraftList
                            mockdraft={mockdraft}
                            isMobile={isMobile} />
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-width: 900px)">
                    <div className="d-flex flex-column app-side mobile p-0">
                        <div className="nav-side nav-left">
                            <a onClick={this.handleSignOut}><h6>SIGN OUT</h6></a>
                            <a className="mm-nav-header"><h6>MOCK MASTERS</h6></a>
                        </div>
                            <div className="mobile-nav-toggle main_nav">
                                <button
                                    className={`left ${leftShowing}`}
                                    value={"leftSide"}
                                    onClick={this.props.toggleDashboards}>
                                    MY DRAFT
                                </button>
                                <button
                                    className={`right ${rightShowing}`}
                                    value={"rightSide"}
                                    onClick={this.props.toggleDashboards}>
                                    EDIT PICK
                                </button>
                            </div>

                        <EditableHeader className="text-center md-header" mid={this.props.mid} value={mockdraft.mockName} />
                            {/*<h6 className="text-center mb-4">Score: {this.props.mockdraft.draftScore}</h6>*/}

                            <MockDraftList
                                mockdraft={this.props.mockdraft}
                                isMobile={this.props.isMobile} />
                    </div>

                </MediaQuery>

            </Fragment>

        )
    }
}

function mapStateToProps({  authedUser, mockdrafts }) {

    const empty = {};
    const zero = 0;
    const mid = Object.keys(mockdrafts)[zero] ? Object.keys(mockdrafts)[zero] : zero;
    const mockdraft = mockdrafts[mid] ? mockdrafts[mid] : empty;

    return {
        mockdraft,
        mid
    }
}

export default connect(mapStateToProps)(MockDraftSide);