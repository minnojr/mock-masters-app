import React, { PureComponent } from 'react';

class AdminUserRow extends PureComponent {

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

export default (AdminUserRow);