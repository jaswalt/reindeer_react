import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';
import Main from './HomePage';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Main />
                <UserRegisterForm />
            </div>
        );
    }
}

(RegisterPage).propTypes = {};
