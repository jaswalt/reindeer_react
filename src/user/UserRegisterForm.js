import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { checkUserNameIsValid } from './userActions';


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
        margin: 5,
        maxWidth: '25%',
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
    },
};


class UserRegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            usernameError: '',

            passwordValue: '',
            passwordError: '',

            confirmPasswordValue: '',
            confirmPasswordError: '',

            emailValue: '',
            emailError: '',

            formValid: false,
        };

        this._validateEmail = this._validateEmail.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.usernameNotValid) {
            this.setState({
                usernameError: 'That username is not available',
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
                    /><br/>
                    <TextField
                        className="firstname"
                        type="name"
                        floatingLabelText="First Name"
                    />
                    <TextField
                        className="lastname"
                        type="name"
                        floatingLabelText="Last Name"
                    /><br/>
                    <TextField
                        className="email"
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
                    <span style={styles.buttons}>
                        <FlatButton hoverColor="lightgreen" style={styles.button}>Submit</FlatButton>
                        <FlatButton hoverColor="lightblue" style={styles.button}>Cancel</FlatButton>
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

    _validateEmail(e) {
        e.stopPropagation();

        const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!this.state.emailValue) {
            this.setState({
                emailError: 'Required',
            });
        } else if (!re.test(this.state.emailValue)) {
            this.setState({
                emailError: 'Email address not valid',
            });
        } else {
            this.setState({
                emailError: '',
            });
        }
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
        } else if (this.state.confirmPasswordValue) {
            if (e.target.value !== this.state.confirmPasswordValue)  {
                this.setState({
                    passwordConfirmError: 'Password and Confirmation don\'t match',
                });
            } else {
               this.setState({
                    passwordConfirmError: '',
               });
            }
        } else {
            this.setState({
                    passwordError: '',
            });
        }
    };

}

(UserRegisterForm).propTypes = {
    checkUsername: PropTypes.func,
    usernameNotValid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        usernameNotValid: state.users.usernameError,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkUsername: (username) => dispatch(checkUserNameIsValid(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm);
