import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import './pickteamcard.css'
import {handleSwapPickTeams} from "../../../actions/picks";

class PickTeamCard extends PureComponent {

    state = {
        toPickId: '',
        fromPickId: ''
    };

    onDragStart = (e,v) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData( "text/plain", v );
        console.log("FROM:");
        console.log(v);
        this.setState({ fromPickId: v });
    };

    allowDrop = ev =>{
        ev.preventDefault();
    };

    onDrop = (e, v) =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        // let {rightContainer} = this.state;
        // rightContainer.push(data);
        // this.setState({ rightContainer });
        console.log("TO:");
        console.log(v);
        console.log(this.state.fromPickId);

        // this.props.dispatch(handleSwapPickTeams(v, this.state.fromPickId))
    };

    render() {

        const { team, pickNum } = this.props;

        return (
            <div
                className="d-flex card col-4 mr-2 md-card br5"
                // draggable="true"
                // onDragStart={ (e) => this.onDragStart(e, pickId) }
                // onDragOver={this.allowDrop}
                // onDrop={ (e) => this.onDrop(e, pickId) }
            >

                <span className="info team-card">
                    <span className="pick-num mr-4">{pickNum}</span>
                    <span>
                        <img src={team.imageUrl} alt="team-logo"/>
                    </span>
                </span>
            </div>
        )
    }
}

function mapStateToProps({ teams, picks }, { teamId, pickId }) {
    const pick = picks[pickId];
    const team = teams[pick.teamId];
    const pickNum = pick.pickNum;
    const emptyObj = {};
    const zero = 0;

    return {
        pickNum : pickNum ? pickNum : zero,
        team : team ? team : emptyObj,
    }
}

export default connect(mapStateToProps)(PickTeamCard);
