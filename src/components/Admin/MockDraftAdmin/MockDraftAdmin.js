import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { handleAddMock} from "../../../actions/mockdrafts";
import { handleGenerateMockPicks } from "../../../actions/picks";
import { setAppLoaded } from "../../../actions/appLoaded";
import { Redirect } from 'react-router-dom'
import {NavLink} from "react-router-dom";


import AdminMockDraftRow from './AdminMockDraftRow';

class MockDraftAdmin extends PureComponent {

    addPicksToMock = (mockId) => {
        this.props.dispatch(handleGenerateMockPicks(mockId));
    };

    handleClickAddNewMock =  () => {
        this.props.dispatch(handleAddMock());
    };

    toggleAppLoadedTrue = () => {
        this.props.dispatch(setAppLoaded(true));
    };

    toggleAppLoadedFalse = () => {
        this.props.dispatch(setAppLoaded(false));
    };

    render() {

        const { user } = this.props;

        return (
            <Fragment>
                { !user.admin
                    ? <Redirect to='/'/>
                    :
                    <div className="d-flex w-50 m-5 flex-column">
                        <h2>Mock Draft Admin</h2>
                        <br/>
                        <div className="card p-3">
                            <center><NavLink to="/mm-only/admin"><h4>Admin Home</h4></NavLink></center>
                        </div>
                        <br/>
                        <div className="card p-3">
                            <center><NavLink to="/mm-only/admin/users"><h4>Admin Users Console</h4></NavLink></center>
                        </div>
                        <br/>
                        <button disabled onClick={this.toggleAppLoadedTrue}>App Loaded to TRUE</button>
                        <br/>
                        <button disabled onClick={this.toggleAppLoadedFalse}>App Loaded to FALSE</button>
                        <br/>
                        <br/>
                        <button onClick={this.handleClickAddNewMock}>Add New Mock Draft</button>
                        <br/>
                        <br/>

                        <div className="card">
                            <h4 className="p-3">Mock Drafts</h4>
                            <div>
                                <table className="p-3 table">
                                    <thead>
                                    <tr className="p-2 table-striped">
                                        <th className="p-2">Mock ID</th>
                                        <th className="p-2">User Email</th>
                                        <th className="p-2">User ID</th>
                                        <th className="p-2">Set user ID</th>
                                        <th className="p-2">Pick Count</th>
                                        <th className="p-2">Add Picks</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.mockdrafts && this.props.mockdrafts.map((md) => {
                                        console.log(md);
                                        return (
                                            <AdminMockDraftRow key={md.id}
                                                               addPicksToMock={(param) => this.addPicksToMock(param)}
                                                               mockdraft={md} userId={md.userId}/>
                                        )
                                    })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
}

function mapStateToProps({ firestore, firebase }) {
    let mockdrafts = firestore.ordered.mockdrafts;
    const empty = [];
    const emptyObj =  {};

    return {
        user: firebase.profile ? firebase.profile : emptyObj,
        mockdrafts: mockdrafts ? mockdrafts : empty,
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(),
    firestoreConnect([
        { collection : 'mockdrafts' },

    ])
)(MockDraftAdmin);