import React, { Component } from 'react';
import { connect } from "react-redux";

import MockDraftList from '../MockDraftList/MockDraftList'

class MockDraftSide extends Component {

    render() {
        return (
            <div className="mockdraftside">
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