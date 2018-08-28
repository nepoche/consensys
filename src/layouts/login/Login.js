import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { RegisterLink } from '../register/Register';
import { ForgotPasswordLink } from '../forgotPassword/ForgotPassword';
import LoginForm from './LoginForm';
import { store } from '../../store';

class LoginPage extends Component {

    render() {

        const state = store.getState();

        if (state.loginReducer !== "") {

            return (
                <Redirect to="/home" />
            );
        }

        return (
            <div>
                <h1>Login</h1>
                <LoginForm history={this.props.history} />
                <ForgotPasswordLink />
                <RegisterLink />
            </div>
        )
    }
};

export default withRouter(LoginPage);