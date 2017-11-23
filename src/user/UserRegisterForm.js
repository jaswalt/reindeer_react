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
            usernameFieldValue: '',
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2} >
                    <TextField
                        className="username"
                        floatingLabelText="Username"
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.usernameFieldValue}
                        onBlur={this._checkUsername}
                        onInput={this._usernameFieldHandler}
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
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /><br />
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
                </Paper>
            </div>

        );
    }

    _usernameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            usernameFieldValue: e.target.value,
        });
    };

    _checkUsername = (e) => {
        e.stopPropagation();

        this.props.checkUsername(this.state.usernameFieldValue);
    }
}

<<<<<<< HEAD
(UserRegisterForm).propTypes = {};
=======
(UserRegisterForm).propTypes = {
    checkUsername: PropTypes.func,
};
>>>>>>> 7cc73d0d2af6a4da8ea15e21a908fc32c2e3c6ee
