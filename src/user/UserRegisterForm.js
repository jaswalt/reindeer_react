import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField } from 'material-ui';

const styles = {
    container: {
        margin: '0 auto',
        maxWidth: 500,
        marginTop: 30,
    },
    form: {
        display: 'flex',
        direction: 'column',
        margin: '0 auto',
        maxWidth: 200,
    }
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
                        value={this.state.usernameFieldValue}
                        floatingLabelText="Username"
                        onBlur={this._checkUsername}
                        onInput={this._usernameFieldHandler}
                    />
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        type="password"
                    />
                    <TextField
                        floatingLabelText="Email"
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

(UserRegisterForm).propTypes = {
    checkUsername: PropTypes.func,
};