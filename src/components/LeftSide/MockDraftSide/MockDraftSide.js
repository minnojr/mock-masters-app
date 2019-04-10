import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftside.css'
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import MockDraftList from '../MockDraftList/MockDraftList'

class MockDraftSide extends Component {

    render() {

        return (
            <div className="app-side left-side">
                {/*{this.props.players &&*/}
                    {/*<span>*/}
                        <div className="nav-left">MOCK MASTERS</div>
                        < h3 className="text-center mb-4 md-header">MOCK DRAFT</h3>
                        <MockDraftList mockdraft={this.props.mockdraft} />
                    {/*</span>*/}
                {/*}*/}
            </div>
        )
    }
}

function mapStateToProps({  authedUser, mockdrafts, players, users, firestore }) {
    // let mockdrafts = firestore.ordered.mockdrafts;

    // const mockdraft = mockdrafts
    //     ? mockdrafts.map(md => {
    //         // console.log(md.userId)
    //         return authedUser === md.userId ? md : {}
    //     })
    //     : {};

    let mockdraft = {};
    for(let md in mockdrafts) {
        mockdraft = authedUser === mockdrafts[md].userId ? mockdrafts[md] : {}
    }


    return {
        mockdraft,
        players
    }
}

export default connect(mapStateToProps)(MockDraftSide);