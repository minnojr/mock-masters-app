import React, { Component } from 'react';

class GradePickBtn extends Component {
    handleClick = () => {
        this.props.onHandleClickBtn(this.props.pick, this.props.pickNum);
    };

    render() {
        return (
            <button className="ml-4" onClick={this.handleClick}>
                Grade Pick {this.props.pickNum}
            </button>
        );
    }
}

export default GradePickBtn;