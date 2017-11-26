import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';
import Main from './HomePage';

class RegisterPage extends Component {
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

export default withRouter(RegisterPage);

