import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from "../../../actions/authedUser";


class SignUp extends Component {

    state = {
        codeInput: "",
        emailInput:""
    };

    handleSignUp = (e) => {
        e.preventDefault();

        const { codeInput, emailInput } = this.state;
        this.props.dispatch(signUp({
            email: emailInput,
            password: codeInput
        }))

    };

    handleCodeChange = (e) => {
        e.preventDefault();

        this.setState({
            codeInput: e.target.value
        });
    };

    handleEmailChange = (e) => {
        e.preventDefault();

        this.setState({
            emailInput: e.target.value
        });
    };

    render() {

        const { codeInput, emailInput } = this.state;
        const { authError } = this.props;

        return (
            <div>
                <div className="login-container d-flex flex-column mt-lg-5 w-100">
                    {/*<h3 className="d-flex justify-content-center mb-5 pb-5 border-bottom"></h3>*/}
                    <div className="flex-column login-box w-100">
                        <h4 className="d-flex justify-content-center">Create User</h4>
                        <div className="d-flex justify-content-center">
                            <form className="d-flex flex-column w-50" onSubmit={this.handleSignUp}>
                                <input
                                    id="textOne"
                                    value={ emailInput }
                                    onChange={this.handleEmailChange}
                                    placeholder="Enter Email"
                                />
                                <br />
                                <input
                                    id="textOne"
                                    value={ codeInput }
                                    onChange={this.handleCodeChange}
                                    placeholder="Enter Password"
                                />
                                <br />
                                <button type="submit">Sign Up</button>
                                <div className="m-3">
                                    { authError ? <p>{authError}</p>: null }
                                </div>
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
        users,
        authError: authedUser.authError ? authedUser.authError : ""
    }
}

export default connect(mapStateToProps)(SignUp);