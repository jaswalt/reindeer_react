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
                        floatingLabelText="Username"
                    />
                    <TextField
                        floatingLabelText="First Name"
                    />
                    <TextField
                        floatingLabelText="Last Name"
                    />
                    <TextField
                        floatingLabelText="Email"
                    />
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        type="password"
                    />
                </Paper>
            </div>

        );
    }
}

(UserRegisterForm).propTypes = {};
