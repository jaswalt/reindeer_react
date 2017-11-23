import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField } from 'material-ui';

const styles = {
    container: {
        margin: '0 auto',
        maxWidth: '50%',
        marginTop: 30,
    },
    form: {
        display: 'flex',
        align: 'center',
        direction: 'column',
        padding: 5,
        maxWidth: '25%',
    },
    floatingLabelFocusStyle: {
        color: '#990033',
    },
    errorStyle: {
        color: '#990033',
    },
};


export default class UserRegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            usernameError: '',
            emailValue: '',
            emailError: '',
            passwordValue: '',
            passwordError: '',
            confirmPasswordValue: '',
            confirmPasswordError: '',
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2} >
                    <TextField
                        className="username"
                        floatingLabelText="Username"
                        errorText={this.state.usernameError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.usernameValue}
                        onChange={this._usernameFieldHandler}
                        onBlur={this._validateUsername}
                    /><br />
                    <TextField
                        className="firstname"
                        type="name"
                        floatingLabelText="First Name"
                    />
                    <TextField
                        className="lastname"
                        type="name"
                        floatingLabelText="Last Name"
                    /><br />
                    <TextField
                        className="email"
                        type="email"
                        floatingLabelText="Email"
                        errorText={this.state.emailError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.emailValue}
                        onChange={this._emailFieldHandler}
                        onBlur={this._validateEmail}
                    /><br />
                    <TextField
                        className="password"
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.passwordError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.passwordValue}
                        onChange={this._passwordFieldHandler}
                        onBlur={this._validatePassword}
                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        type="password"
                        errorText={this.state.confirmPasswordError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.confirmPasswordValue}
                        onChange={this._confirmPasswordFieldHandler}
                        onBlur={this._validateConfirmPassword}
                    />
                </Paper>
            </div>

        );
    }

    _usernameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            usernameValue: e.target.value,
        });

    };

    _validateUsername = (e) => {
        e.stopPropagation();

        if (!this.state.usernameValue) {
            this.setState({
                usernameError: 'Required field',
            });
        } else {
            this.setState({
                usernameError: '',
            });

            this.props.checkUsername(this.state.usernameValue);
        };
    };

    _emailFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            emailValue: e.target.value,
        });

    };

    _validateEmail = (e) => {
        e.stopPropagation();

        if (!this.state.emailValue) {
            this.setState({
                emailError: 'Required field',
            });
        } else {
            this.setState({
                emailError: '',
            });
        };
    };

    _passwordFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            passwordValue: e.target.value,
        });

    };

    _validatePassword = (e) => {
        e.stopPropagation();

        if (!this.state.passwordValue) {
            this.setState({
                passwordError: 'Required field',
            });
        } else {
            this.setState({
                passwordError: '',
            });
        };
    };

    _confirmPasswordFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            confirmPasswordValue: e.target.value,
        });

    };

    _validateConfirmPassword = (e) => {
        e.stopPropagation();

        if (!this.state.confirmPasswordValue) {
            this.setState({
                confirmPasswordError: 'Required field',
            });
        } else {
            this.setState({
                confirmPasswordError: '',
            });
        };
    };

}

(UserRegisterForm).propTypes = {
    checkUsername: PropTypes.func,
};
