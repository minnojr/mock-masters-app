import React, { Component, Fragment } from 'react';
import connect from "react-redux/es/connect/connect";
import { setAppLoaded } from "../actions/appLoaded";

import SignIn from "./SignIn/SignIn";
import App from "./App/App"

class Entry extends Component {
    componentDidMount() {
        this.props.dispatch(setAppLoaded(false));
    }

    render() {
        const { auth } = this.props;

        return (
            <Fragment>
                {
                    auth.uid === undefined
                    ? <SignIn />
                    : <App />
                }
            </Fragment>
        )
    }
}


function mapStateToProps({ firebase }) {

    return {
        auth: firebase.auth,
    }
}

export default connect(mapStateToProps)(Entry);

