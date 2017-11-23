import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkUserNameIsValid } from '../user/userActions';
import UserRegisterForm from '../user/UserRegisterForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <UserRegisterForm />
=======
                <UserRegisterForm
                    checkUsername={this.props.checkUsername}
                />
>>>>>>> 7cc73d0d2af6a4da8ea15e21a908fc32c2e3c6ee
            </div>
        );
    }
}

(LoginPage).propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return { state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
<<<<<<< HEAD
    return { actions: dispatch };
=======
    return {
        checkUsername: (username) => dispatch(checkUserNameIsValid(username))
    };
>>>>>>> 7cc73d0d2af6a4da8ea15e21a908fc32c2e3c6ee
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
