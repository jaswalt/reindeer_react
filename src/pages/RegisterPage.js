import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <UserRegisterForm/>
            </div>
        );
    }
}

(LoginPage).propTypes = {};
