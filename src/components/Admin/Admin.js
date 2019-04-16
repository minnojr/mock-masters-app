import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'
import './admin.css';

import { NavLink } from "react-router-dom";
import {setAppLoaded} from "../../actions/appLoaded";
import { handleSetDraftStatus } from "../../actions/liveDraft";

class Admin extends PureComponent {

    state = {
        playerName: "",
        playerPosition: "",
        playerSchool: "",
        playerConf: "",
        playerOffOrDef: "",
        setFocusMock: "",
    };

    toggleEnterLive = () => {
        this.props.dispatch(handleSetDraftStatus(true));
    };

    toggleDiableLive = () => {
        this.props.dispatch(handleSetDraftStatus(false));
    };

    render() {

        const { user, liveDraft } = this.props;

        return (

            <Fragment>
            { !user.admin
                ? <Redirect to='/' />
                : <div className="d-flex w-50 m-5 flex-column">
                        <h2>Mock Masters Admin Console</h2>
                        <br />
                        <div className="card p-3">
                            <center><NavLink to="/"><h4>Master Mock Dashboard</h4></NavLink></center>
                        </div>
                        <br />
                        <div className="card p-3">
                            <center><NavLink to="/mm-only/admin/mockdrafts"><h4>Admin Mock Drafts Console</h4></NavLink></center>
                        </div>
                        <br />
                        <div className="card p-3">
                            <center><NavLink to="/mm-only/admin/users"><h4>Admin Users Console</h4></NavLink></center>
                        </div>
                        <br />
                        <br/>
                        <button onClick={this.toggleEnterLive}>Enter Live Mode</button>
                        <br/>
                        <button onClick={this.toggleDiableLive}>Diable Live Mode</button>
                        <br/>
                        <h3 className="draft-status">
                            { liveDraft.isLive
                                ?   <div className="red">
                                        <strong className="">DRAFT  STATUS:</strong>
                                        <p>LIVE</p>
                                    </div>
                                :   <div className="green">
                                        <strong className="">DRAFT  STATUS:</strong>
                                        <p >NOT LIVE</p>
                                    </div>
                            }
                            </h3>
                    </div>
            }
            </Fragment>
        )
    }
}

function mapStateToProps({ firestore, firebase }) {
    const emptyObj =  {};
    let l = firestore.ordered.liveDraft ? firestore.ordered.liveDraft[0] : {};
    console.log(l);

    return {
        user: firebase.profile ? firebase.profile : emptyObj,
        liveDraft : firestore.ordered.liveDraft ? firestore.ordered.liveDraft[0] : {}
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(),
    firestoreConnect([
        { collection : 'players' },
        { collection : 'mockdrafts' },
        { collection : 'liveDraft' },

    ])
)(Admin);