import React, { Component } from 'react';
import './dashboard.css'
import MediaQuery from 'react-responsive';

import MockDraftSide from '../LeftSide/MockDraftSide/MockDraftSide'
import PlayerSearchSide from "../RightSide/PlayerSearchSide/PlayerSearchSide";


class Dashboard extends Component {

    state = {
        showing: "leftSide"
    };

    toggleAnswers = (e) => {
        const toggleTo = e.target.value;

        if(this.state.showing !== e.target.value) {
            this.setState((prevState) => ({
                showing: toggleTo
            }));
        }
    };

    render() {
        return (
            <div className="dashboard">

                <MediaQuery query="(min-width: 935px)">
                    <div className="d-flex col-12 container p-0">
                        <div className="left-dashboard d-flex col-6 justify-content-center pl-0 pr-0">
                            <MockDraftSide />
                        </div>
                        <div className="right-dashboard d-flex col-6 justify-content-center">
                            <PlayerSearchSide />
                        </div>
                    </div>
                </MediaQuery>


                <MediaQuery query="(max-width: 935px)">
                    <div className="d-flex flex-column col-12 container p-0">
                        <div className="d-flex col-12 justify-content-center p-0">
                            <button className={this.state.showing === "leftSide" ? 'showing' : 'notShowing'} value={"leftSide"} onClick={this.toggleAnswers}>My Mock Draft</button>
                            <button className={this.state.showing === "rightSide" ? 'showing' : 'notShowing'}  value={"rightSide"} onClick={this.toggleAnswers}>Player Search</button>
                        </div>
                        <hr />
                        { this.state.showing === "leftSide"
                            ? <MockDraftSide />
                            : <PlayerSearchSide />
                        }
                    </div>
                </MediaQuery>

            </div>
        )
    }
}

export default Dashboard;