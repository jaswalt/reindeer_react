import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <UserRegisterForm />
            </div>
        );
    }
}

(LoginPage).propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return { state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
