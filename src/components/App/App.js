import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './App.css'

import { handleInitialData } from "../../actions/shared";

import Dashboard from '../Dashboard/Dashboard'
import Admin from '../Admin/Admin'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }



    render() {
        library.add(faUserEdit);
        library.add(faPlus);

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="app">
                            {/*<Nav />*/}
                            {/*<SignInCode />*/}
                            { this.props.loading === true
                                ? <span>Loading...</span>
                                :
                                <span>
                                    <Route path='/' exact component={ Dashboard } />
                                    <Route path='/mm-only/admin' exact component={ Admin } />
                                </span>
                            }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);