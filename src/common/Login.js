import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Login extends Component {
    static muiName = 'FlatButton';
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <span>
                <FlatButton {...this.props} label="Login" />
                <FlatButton {...this.props} label="Register" />
            </span>
        );
    }
}
