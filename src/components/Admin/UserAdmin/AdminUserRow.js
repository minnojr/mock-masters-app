import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import {firebaseConnect} from "react-redux-firebase";

class AdminUserRow extends PureComponent {

    state = {
        userIdInput: ""
    };

    handleClick = () => {
        this.props.addPicksToMock(this.props.mockdraftId);
    };

    handleUIDchange = (e) => {
        e.preventDefault();
        this.setState({
            userIdInput: e.target.value
        })
    }

    render() {
        const { user, userId } = this.props;

        return (
            <tr className="p-2">
                <td className="p-2">{ user.email }</td>
                <td className="p-2">{ user.mockdraftName }</td>
                <td className="p-2">{ user.betaCode }</td>
                <td className="p-2">{ userId }</td>
                <td className="p-2">{ user.admin }</td>
                <td className="p-2">{ user.draftId }</td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    console.log("state");
    console.log(state);
    return {

    }
}


export default connect(mapStateToProps)(AdminUserRow);