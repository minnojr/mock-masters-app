import React, { Component } from 'react';

class EditMock extends Component {

    handleClick = () => {
        this.props.addPicksToMock(this.props.mockdraftId);
    };

    render() {
        return (
            <div className="d-flex flex-row">
                <span>
                    { this.props.mockdraftId }
                </span>
                <button onClick={this.handleClick}>Add 32 Picks</button>
            </div>
        )
    }
}

export default EditMock;