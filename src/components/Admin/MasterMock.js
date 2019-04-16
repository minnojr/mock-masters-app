import React, { Component, PureComponent } from 'react';
import '../../components/Dashboard/dashboard.css';
import MediaQuery from 'react-responsive';

import MockDraftSide from '../LeftSide/MockDraftSide/MockDraftSide'
import PlayerSearchSide from "../RightSide/PlayerSearchSide/PlayerSearchSide";
import { connect } from "react-redux";
import {setAppLoaded} from "../../actions/appLoaded";


class MasterMock extends Component {
    componentDidMount() {
        this.props.dispatch(setAppLoaded(true));
    }

    state = {
        showing: "leftSide"
    };

    toggleDashboards = (e) => {
        const toggleTo = e.target.value;

        if(this.state.showing !== e.target.value) {
            this.setState((prevState) => ({
                showing: toggleTo
            }));
        }
    };

    render() {
        const { auth, appLoaded } = this.props;

        return (
            <span>
                { appLoaded
                    ?
                    <div className="dashboard">
                        <MediaQuery query="(min-width: 935px)">
                            <MockDraftSide isMasterMock={true}/>
                            <PlayerSearchSide />
                        </MediaQuery>


                        <MediaQuery query="(max-width: 935px)">
                            <div className="d-flex flex-column col-12 container p-0">
                                <div className="d-flex col-12 justify-content-center p-0">
                                    <button className={this.state.showing === "leftSide" ? 'showing' : 'notShowing'} value={"leftSide"} onClick={this.toggleDashboards}>My Mock Draft</button>
                                    <button className={this.state.showing === "rightSide" ? 'showing' : 'notShowing'}  value={"rightSide"} onClick={this.toggleDashboards}>Player Search</button>
                                </div>
                                <hr />
                                { this.state.showing === "leftSide"
                                    ? <MockDraftSide isMasterMock={true} />
                                    : <PlayerSearchSide />
                                }
                            </div>
                        </MediaQuery>
                    </div>
                    : ""
                }
            </span>
        )
    }
}

function mapStateToProps({ firebase, appLoaded }) {

    return {
        auth: firebase.auth,
        appLoaded
    }
}

export default connect(mapStateToProps)(MasterMock);