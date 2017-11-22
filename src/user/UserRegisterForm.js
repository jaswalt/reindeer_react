import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';

export default class UserRegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Paper zDepth={2}>
                <p>Test</p>
            </Paper>
        );
    }
}

(UserRegisterForm).propTypes = {};