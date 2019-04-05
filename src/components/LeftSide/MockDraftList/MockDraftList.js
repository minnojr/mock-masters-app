import React, { Component } from 'react';
import { connect } from "react-redux";
import './mockdraftlist.css'

import PickRow from '../PickRow/PickRow'

class MockDraftList extends Component {

    render() {

        const { mockDraftPicks, focusPick } = this.props;

        if(!mockDraftPicks || !focusPick) {
            return (
                <div>This Mock Draft doesn't exits...</div>
            )
        }

        let key=0;
        return (
            <div>
                <h3 className="text-center mb-4">MOCK DRAFT</h3>

                <ul className="mockdraftlist">

                    {mockDraftPicks.map((pick) =>
                    {

                        return (
                            <li key={key++} >
                                <PickRow pick={pick} />
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

function mapStateToProps({ picks, focusPick }, { mockdraft }) {
    // console.log(focusPick)

    return {
        mockDraftPicks: mockdraft ? mockdraft.picks.map(pick => picks[pick]) : null,
        focusPick
    }
}

export default connect(mapStateToProps)(MockDraftList);