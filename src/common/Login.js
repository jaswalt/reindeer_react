import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
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
            </span>
        );
    }
}

export default Login;
