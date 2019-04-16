import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { handleChangeMockUserId } from "../../../actions/mockdrafts";
import {compose} from "redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";

class AdminMockDraftRow extends PureComponent {

    state = {
        userIdInput: ""
    };

    handleClick = () => {
        this.props.addPicksToMock(this.props.mockdraft.id);
    };

    handleSetMockUserId = () => {
        const { mockdraft, dispatch } = this.props;
        const { userIdInput } = this.state;

        dispatch(handleChangeMockUserId(mockdraft.id, userIdInput))
    };

    handleUIDchange = (e) => {
        e.preventDefault();
        this.setState({
            userIdInput: e.target.value
        })
    };

    render() {
        const { mockdraft, user } = this.props;
        const { userIdInput } = this.state;

        return (

                    <tr className="p-2">
                        <td className="p-2">{ mockdraft.id }</td>
                        <td className="p-2">{ user ? user.email : "--" }</td>
                        <td className="p-2">{ mockdraft.userId }</td>
                        <td className="p-2">
                            { mockdraft.userId.length > 3
                                ? <p>-----</p>
                                :
                                <form onSubmit={this.handleSetMockUserId}>
                                    <input
                                        value={ userIdInput }
                                        onChange={ this.handleUIDchange }
                                        placeholder="User ID"/>
                                    <button type="submit">Set UID</button>
                                </form>
                            }
                        </td>
                        <td className="p-2">{ mockdraft.picks.length }</td>
                        <td className="p-2">{ mockdraft.picks.length < 2
                                ? <button onClick={this.handleClick}>Add 32 Picks</button>
                                : <button disabled>Already Done</button>
                            }
                        </td>
                    </tr>
        )
    }
}


function mapStateToProps({ firestore }, { userId }) {
    let users = firestore.ordered.users;

    const empty = [];

    return {
        user: users ? users.find((u) =>  u.id === userId ) : empty
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect(),
    firestoreConnect([
        { collection : 'users' },

    ])
)(AdminMockDraftRow);