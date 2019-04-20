import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar  from "react-redux-loading";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './App.css'

import { handleInitialData } from "../../actions/shared";


import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../SignIn/SignIn';
import SignUp from '../Admin/MockDraftAdmin/SignUp';
import Admin from '../Admin/Admin';
import AdminMockDraftRow from '../Admin/MockDraftAdmin/MockDraftAdmin';
import UserAdmin from '../Admin/UserAdmin/UserAdmin';
import {signOut} from "../../actions/authedUser";




// Initial state is saving upon arriving on signin page
// Need to re-get initial data everytime the app re-renders with correct user
// Mocks are being set in state, then if you log out and log in as another user, old user's mock shows... because state
// isn't resetting and app isn't refeeshing on signin page. Need app to refresh there.


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
        // this.props.dispatch(signOut());
    }



    render() {
        library.add(faUserEdit);
        library.add(faPlus);
        library.add(faEdit);
        library.add(faTrash);

        const { auth, appLoaded }  = this.props;

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="app">
                        { !appLoaded
                            ? <h2 className="m-5">Loading.....</h2>
                            : <span>
                                    <Route path='/' exact component={ Dashboard } />
                                    <Route path='/signin' exact component={ SignIn } />
                                    <Route path='/signup' exact component={ SignUp } />
                                    <Route path='/mm-only/admin' exact component={ Admin } />
                                    <Route path='/mm-only/admin/mockdrafts' exact component={ AdminMockDraftRow } />
                                    <Route path='/mm-only/admin/users' exact component={ UserAdmin } />
                                </span>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser, firebase, appLoaded }) {

    return {
        auth: firebase.auth,
        appLoaded
    }
}

export default connect(mapStateToProps)(App);