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

        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2} >
                    <TextField
                        className="username"
                        type="text"
                        floatingLabelText="Username"
                        errorText="Required field"
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
}

(UserRegisterForm).propTypes = {};
