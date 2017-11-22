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
}


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
}

(UserRegisterForm).propTypes = {};