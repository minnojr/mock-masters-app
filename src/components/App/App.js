import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../../actions/shared";

import Dashboard from '../Dashboard/Dashboard'
import Nav from "../Nav/Nav";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }



    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='d-flex col-12 container p-0'>
                        <div className="col-12 p-0">
                            <Nav />
                            { this.props.loading === true
                                ? <span>Loading...</span>
                                :
                                <Route path='/' exact component={ Dashboard } />
                            }
                        </div>
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