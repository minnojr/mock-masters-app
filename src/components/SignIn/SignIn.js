import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from "../../actions/authedUser";
import mmLogo from '../../assets/img/mm-logo.png'

import './signin.css'



class SignIn extends Component {
    componentDidMount() {
        this.forceUpdate();
    }

    state = {
        codeInput: "",
        emailInput:"",
        passInput: ""
    };

    handleLogin = (e) => {
        e.preventDefault();

        const { codeInput, emailInput, passInput } = this.state;
        this.props.dispatch(signIn({
            email: emailInput,
            password: passInput,
            betaCode: codeInput
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

    handlePassChange = (e) => {
        e.preventDefault();

        this.setState({
            passInput: e.target.value
        });
    };

    render() {

        const { codeInput, emailInput, passInput } = this.state;
        const { authError } = this.props;

        return (
            <div>
                <div className="login-container d-flex flex-column">
                    <img src={mmLogo} className="login-logo"/>
                    <div className="flex-column login-box w-100">
                        {/*<h4 className="d-flex justify-content-center">Signin</h4>*/}
                        <div className="d-flex justify-content-center">
                            <form className="d-flex login-form flex-column w-25" onSubmit={this.handleLogin}>
                                <input
                                    id="textOne"
                                    value={ emailInput }
                                    onChange={this.handleEmailChange}
                                    placeholder="Email"
                                />
                                <br />
                                <input
                                    id="textOne"
                                    value={ passInput }
                                    type="password"
                                    onChange={this.handlePassChange}
                                    placeholder="Password"
                                />
                                <br />
                                <button type="submit">Login</button>
                                <div className="text-center m-3">
                                    { authError ? <p>{authError}</p>: null}
                                    <span className="trouble-login">Login support: team@mockmasters.com</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, auth }) {
    return {
        users,
        authError: authedUser.authError ? authedUser.authError : ""
    }
}

export default connect(mapStateToProps)(SignIn);