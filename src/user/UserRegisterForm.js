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
        padding: 5,
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
    }
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

            formValid: false,
        };
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
                        type="email"
                        floatingLabelText="Email"
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /><br/>
                    <TextField
                        className="password"
                        floatingLabelText="Password"
                        type="password"
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        type="password"
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
                usernameError: 'Required',
            });
        } else {
            this.setState({
                usernameError: '',
            });

            this.props.checkUsername(this.state.usernameValue);
        }
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
