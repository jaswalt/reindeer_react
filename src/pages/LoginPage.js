import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserLoginForm from '../user/UserLoginForm';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <UserLoginForm/>
            </div>
        );
    }
}

(LoginPage).propTypes = {};
