import React, { Component, PureComponent } from 'react';
import './dashboard.css'
import MediaQuery from 'react-responsive';

import MockDraftSide from '../LeftSide/MockDraftSide/MockDraftSide'
import PlayerSearchSide from "../RightSide/PlayerSearchSide/PlayerSearchSide";
import { connect } from "react-redux";
import SignIn from "../SignIn/SignIn";
import {handleInitialData} from "../../actions/shared";
import {onEditPick} from "../../actions/toggleMobile";


class Dashboard extends Component {
    componentWillMount() {
        this.myRef = React.createRef();
    }

    state = {
        showing: "leftSide",
        isMobile: window.innerWidth < 900
    };

    handleWindowResize = () => {
        this.setState({ isMobile: window.innerWidth < 900 });
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    };


    toggleDashboards = () => {
        this.props.dispatch(onEditPick(!this.props.toggleMobile))
    };

    render() {
        const { auth, appLoaded, toggleMobile } = this.props;

        console.log("toggleMobile State:");
        console.log(toggleMobile);

        return (
            <span>
                { appLoaded
                    ?
                    <div className="dashboard">
                        <MediaQuery query="(min-width: 901px)">
                            <MockDraftSide
                                isMasterMock={false}
                                isMobile={this.state.isMobile} />
                            <PlayerSearchSide />
                        </MediaQuery>


                        <MediaQuery query="(max-width: 900px)">
                            <div className="d-flex flex-column col-12 container p-0">
                                { !this.props.toggleMobile
                                    ? <MockDraftSide
                                        isMasterMock={false}
                                        showing={this.props.toggleMobile}
                                        isMobile={this.state.isMobile}
                                        toggleDashboards={this.toggleDashboards} />
                                    : <PlayerSearchSide
                                        showing={this.props.toggleMobile}
                                        toggleDashboards={this.toggleDashboards} />
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

function mapStateToProps({ firebase, appLoaded, toggleMobile }) {

    return {
        auth: firebase.auth,
        appLoaded,
        toggleMobile
    }
}

export default connect(mapStateToProps)(Dashboard);