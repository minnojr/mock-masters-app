import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleChangeMockName } from "../../../actions/mockdrafts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class EditableHeader extends Component {

    state = {
        editing: false
    };

    toggleEdit = (e) => {
        e.stopPropagation();
        if (this.state.editing) {
            this.cancel();
        } else {
            this.edit();
        }
    };

    edit = () => {
        this.setState({
            editing: true
        }, () => {
            this.domElm.focus();
        });
    };

    save = () => {
        this.setState({
            editing: false
        }, () => {
            if (this.isValueChanged()) {
                console.log('Value is changed', this.domElm.textContent);
                this.props.dispatch(handleChangeMockName(this.domElm.textContent, this.props.mid))
            }
        });
    };

    cancel = () => {
        this.setState({
            editing: false
        });
    };

    isValueChanged = () => {
        return this.props.value !== this.domElm.textContent
    };

    handleKeyDown = (e) => {
        const { key } = e;
        switch (key) {
            case 'Enter':
            case 'Escape':
                this.save();
                break;
        }
    };

    render() {
        const {editing} = this.state;

        let editClass = editing ? 'editing' : '';
        return (
            <div className="mock-name mr-4">
            <h3
                className={`ml-4 mr-2 mb-0 pb-2 md-header ${editClass}`}
                onClick={this.edit}
                contentEditable={editing}
                suppressContentEditableWarning={true}
                ref={(domNode) => {
                    this.domElm = domNode;
                }}
                onBlur={this.save}
                onKeyDown={this.handleKeyDown}
            >
                {this.props.value}
            </h3>
                <span onClick={this.edit} className="editMockName"><FontAwesomeIcon icon="edit" /></span>
             </div>
        )
    }
}


export default connect()(EditableHeader);