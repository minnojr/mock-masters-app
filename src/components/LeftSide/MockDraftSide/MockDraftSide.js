import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftside.css'

import MockDraftList from '../MockDraftList/MockDraftList'

class MockDraftSide extends Component {

    render() {
        return (
            <div className="app-side left-side">
                <div className="nav-left">MOCK MASTERS</div>
                <h3 className="text-center mb-4 md-header">MOCK DRAFT</h3>
                <MockDraftList mockdraft={this.props.mockdraft} />
            </div>
        )
    }
}

function mapStateToProps({  authedUser, users, mockdrafts, picks }) {
    const thisUser = users[authedUser];
    const mockdraft = mockdrafts[thisUser.draftId];

    return {
        thisUser,
        mockdraft,
        picks
    }
}

export default connect(mapStateToProps)(MockDraftSide);