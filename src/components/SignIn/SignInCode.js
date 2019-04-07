import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from "../../actions/authedUser";


class Signin extends Component {

    state = {
        codeInput: "",
        emailInput:""
    };

    authenticateUser = () => {

    }

    handleLogin = (e) => {
        e.preventDefault();

        const { codeInput, emailInput } = this.state;
        console.log("\n\n********");
        console.log(codeInput);
        console.log(emailInput);

        // this.props.dispatch(setAuthedUser(e.target.value));
    };

    handleCodeChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        this.setState({
            codeInput: e.target.value
        });
    };

    handleEmailChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        this.setState({
            emailInput: e.target.value
        });
    };

    render() {

        const { codeInput, emailInput } = this.state;

        return (
            <div>
                <div className="login-container d-flex flex-column mt-lg-5">
                    {/*<h3 className="d-flex justify-content-center mb-5 pb-5 border-bottom"></h3>*/}
                    <div className="flex-column login-box">
                        <h4 className="d-flex justify-content-center">Signin</h4>
                        <div className="d-flex justify-content-center">
                            <form className="d-flex flex-column" onSubmit={this.handleLogin}>
                                <input
                                    id="textOne"
                                    value={ emailInput }
                                    onChange={this.handleEmailChange}
                                    placeholder="Enter Email"
                                />
                                <input
                                    id="textOne"
                                    value={ codeInput }
                                    onChange={this.handleCodeChange}
                                    placeholder="Enter Code"
                                />
                                <button type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Signin);