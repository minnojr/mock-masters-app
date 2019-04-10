import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftlist.css'

import PickRow from '../PickRow/PickRow'
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";

class MockDraftList extends Component {

    render() {

        const { mockdraft } = this.props;

        // Prop MockDrafts is returning, but its not allowing me to map. At one re-render it is undefined.
        // Consider memoizing the components eventually so that they only render once when needed
        //
        if(!mockdraft.picks) {
            // console.log(" NO MOCK HERE>.... ");
            return (
                <div>This Mock Draft doesn't exits...</div>
            )
        } else {
            mockdraft.picks.map(x => console.log(x));
            let key=0;
            return (
                <div className="mockdraft-container">
                    <ul className="mockdraftlist">

                        {mockdraft.picks.map((pick) =>
                        {
                        return (
                        <li key={key++} >
                            <PickRow pickId={pick} />
                        </li>
                        )
                        })}
                    </ul>

                </div>
            )
        }

    }
}

function mapStateToProps({ focusPick }) {

    // console.log("\n\n! ! ! ! ! ! ! ! ! ! !");
    // console.log(firestore);
    // const picks = firestore.ordered.picks;
    //
    // console.log(picks);

    return {
        // mockDraftPicks: mockdraft ? mockdraft.picks.map(pick => picks[pick]) : null,
        focusPick
    }
}

export default connect(mapStateToProps)(MockDraftList);