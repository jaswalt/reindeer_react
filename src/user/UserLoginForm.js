import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux';

const styles = {
    container: {
        margin: '0 auto',
        maxWidth: '30%',
        paddingTop: 30,
        marginBottom: 30,
    },
    style: {
        marginLeft: 14,
        width: '93%',
    },
    form: {
        display: 'flex',
        direction: 'column',
        maxWidth: '100%',
    },
    floatingLabelFocusStyle: {
        color: '#990033',
    },
    errorStyle: {
        color: '#990033',
    },
    buttons: {
        display: 'flex',
        align: 'center',
        direction: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        backgroundColor: '#990033',
        color: 'white',
    }
};


class UserLoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            usernameError: '',

            passwordValue: '',
            passwordError: '',

            formValid: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.usernameDoesNotExist) {
            this.setState({
                usernameError: 'Username is not valid',
            })
        } else {
            this.setState({
                usernameError: '',
            })
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2}>
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
                        style={styles.style}
                    /><br/>
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
                        style={styles.style}
                    />
                    <span style={styles.buttons}>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            // onClick={this._processForm}
                        >
                            Login
                        </FlatButton>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            onClick={this._clearForm}
                        >
                            Clear
                        </FlatButton>
                    </span>
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
                usernameError: 'Required',
            });
        } else {
            this.setState({
                usernameError: '',
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
                passwordError: 'Required',
            });
        } else {
            this.setState({
                    passwordError: '',
            });
        }
    };

    // _sendForm = () => {
    //     const loginForm = {
    //         // VALIDATE USERNAME AND PASSWORD
    //     };

    //     this.props.transmitForm(loginForm);
    // }

    _clearForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            usernameValue: '',
            usernameError: '',

            passwordValue: '',
            passwordError: '',

            formValid: false,
        });
    }
}

export default UserLoginForm;
