import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserLoginForm from '../user/UserLoginForm';
import Main from './HomePage';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>
                <Main />
                <UserLoginForm />
            </div>
        );
    }
}

LoginPage.propTypes = {};

export default LoginPage;
