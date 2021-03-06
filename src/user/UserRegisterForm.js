import React, {Component} from 'react';
import { Paper, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkUserNameIsValid, registerUser } from '../store/actions/userActions';
import { Redirect } from 'react-router';


const styles = {
    container: {
        margin: '0 auto',
        maxWidth: '400px',
        paddingTop: 30,
        marginBottom: 30,
    },
    field: {
        marginLeft: 14,
        width: '93%',
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


class UserRegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            usernameError: '',

            firstnameValue: '',
            firstnameError: '',

            lastnameValue: '',
            lastnameError: '',

            dobValue: '',
            dobError: '',

            passwordValue: '',
            passwordError: '',

            confirmPasswordValue: '',
            confirmPasswordError: '',

            emailValue: '',
            emailError: '',

            formValid: false,
        };

        this._validateEmail = this._validateEmail.bind(this);
        this._validateFirstname = this._validateFirstname.bind(this);
        this._validateLastname = this._validateLastname.bind(this);
        this._validateDOB = this._validateDOB.bind(this);
        this._validateConfirmPassword = this._validateConfirmPassword.bind(this);
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
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.usernameValue}
                        onChange={this._usernameFieldHandler}
                        onBlur={this._validateUsername}
                        style={styles.field}
                    /><br/>
                    <TextField
                        className="firstname"
                        type="name"
                        floatingLabelText="First Name"
                        value={this.state.firstnameValue}
                        errorText={this.state.firstnameError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={this._firstnameFieldHandler}
                        onBlur={this._validateFirstname}
                        style={styles.field}
                    />
                    <TextField
                        className="lastname"
                        type="name"
                        floatingLabelText="Last Name"
                        value={this.state.lastnameValue}
                        errorText={this.state.lastnameError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={this._lastnameFieldHandler}
                        onBlur={this._validateLastname}
                        style={styles.field}
                    /><br/>
                        <TextField
                        className="dob"
                        floatingLabelText="Birthday"
                        errorText={this.state.dobError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.dobValue}
                        onChange={this._dobFieldHandler}
                        onBlur={this._validateDOB}
                        style={styles.field}
                    /><br/>
                    <TextField
                        className="email"
                        floatingLabelText="Email"
                        errorText={this.state.emailError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.emailValue}
                        onChange={this._emailFieldHandler}
                        onBlur={this._validateEmail}
                        style={styles.field}
                    /><br />
                    <TextField
                        className="password"
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.passwordError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.passwordValue}
                        onChange={this._passwordFieldHandler}
                        onBlur={this._validatePassword}
                        style={styles.field}
                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        type="password"
                        errorText={this.state.confirmPasswordError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.confirmPasswordValue}
                        onChange={this._confirmPasswordFieldHandler}
                        onBlur={this._validateConfirmPassword}
                        style={styles.field}
                    />
                    <span style={styles.buttons}>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            onClick={this._processForm}
                        >
                            Register
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
                {this.state.formValid && <Redirect to={'/users/profile'}/>}
            </div>
        );
    }

    /**
     *    Form Input Handlers
     */

    _usernameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            usernameValue: e.target.value.trim(),
        });
    };

    _firstnameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            firstnameValue: e.target.value,
        });
    };

    _lastnameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            lastnameValue: e.target.value,
        });
    };

    _dobFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            dobValue: e.target.value,
        });

    };

    _emailFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            emailValue: e.target.value.trim(),
        });

    };

    _passwordFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            passwordValue: e.target.value,
        })
    };

    _confirmPasswordFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            confirmPasswordValue: e.target.value,
        })
    };

    /**
     *   Form Validators
     */

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

            this.props.checkUsername(this.state.usernameValue);
        };
    };

    _validateFirstname = (e) => {
        e.stopPropagation();

        if (!this.state.firstnameValue) {
            this.setState({
                firstnameError: 'Required',
            });
        } else {
            this.setState(prevState => ({
                firstnameValue: prevState.firstnameValue.trim(),
                firstnameError: '',
            }));
        };
    };

    _validateLastname = (e) => {
        e.stopPropagation();

        if (!this.state.lastnameValue) {
            this.setState({
                lastnameError: 'Required',
            });
        } else {
            this.setState(prevState => ({
                lastnameValue: prevState.lastnameValue.trim(),
                lastnameError: '',
            }));
        };
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

    _validateDOB(e) {
        e.stopPropagation();

        const re = /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;

        if (!this.state.dobValue) {
            this.setState({
                dobError: 'Required',
            });
        } else if (!re.test(this.state.dobValue)) {
            this.setState({
                dobError: 'Birthday not valid',
            });
        } else {
            this.setState(prevState => ({
                dobValue: prevState.dobValue.trim(),
                dobError: '',
            }));
        };
    };

    _validatePassword = (e) => {
        e.stopPropagation();

        if (!this.state.passwordValue) {
            this.setState({
                passwordError: 'Required',
            });
        } else if (this.state.confirmPasswordValue) {
            if (this.state.passwordValue !== this.state.confirmPasswordValue)  {
                this.setState({
                    confirmPasswordError: 'Password and Confirmation don\'t match',
                });
            } else {
               this.setState({
                    confirmPasswordError: '',
               });
            }
        } else {
            this.setState({
                    passwordError: '',
            });
        }
    };

    _validateConfirmPassword = (e) => {
        e.stopPropagation();

        if (!this.state.confirmPasswordValue) {
            this.setState({
                confirmPasswordError: 'Required',
            });
        } else if (this.state.passwordValue) {
            if (this.state.confirmPasswordValue !== this.state.passwordValue)  {
                this.setState({
                    confirmPasswordError: 'Password and Confirmation don\'t match',
                });
            } else {
               this.setState({
                    confirmPasswordError: '',
               });
            }
        } else {
            this.setState({
                    confirmPasswordError: '',
            });
        }
    };

    /**
     *    Form Submission Handlers
     */

    _processForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this._validateForm(e);
    }

    _validateForm = (e) => {
        this._validateUsername(e);
        this._validateFirstname(e);
        this._validateLastname(e);
        this._validateEmail(e);
        this._validateDOB(e);
        this._validatePassword(e);
        this._validateConfirmPassword(e);

        const {
            usernameError,
            firstnameError,
            lastnameError,
            emailError,
            dobError,
            passwordError,
            confirmPasswordError } = this.state;
        
        if (usernameError || firstnameError ||
            lastnameError || emailError || dobError || passwordError ||
            confirmPasswordError) {
            
            this.setState({
                formValid: false,
            });
        } else {
            this.setState({
                formValid: true,
            });

            this._sendForm();
        }
    }

    _sendForm = () => {
        const userForm = {
            username: this.state.usernameValue,
            password: this.state.passwordValue,
            email: this.state.emailValue,
            dob: this.state.dobValue,
            first_name: this.state.firstnameValue,
            last_name: this.state.lastnameValue,
        };

        this.props.transmitForm(userForm);
    }

    _clearForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            usernameValue: '',
            usernameError: '',

            firstnameValue: '',
            firstnameError: '',

            lastnameValue: '',
            lastnameError: '',

            dobValue: '',
            dobError: '',

            passwordValue: '',
            passwordError: '',

            confirmPasswordValue: '',
            confirmPasswordError: '',

            emailValue: '',
            emailError: '',

            formValid: false,
        })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        usernameNotValid: state.users.usernameError,
        waitingServer: state.users.loading,
        serverError: state.users.error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkUsername: (username) => dispatch(checkUserNameIsValid(username)),
        transmitForm: (userForm) => dispatch(registerUser(userForm)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm));
