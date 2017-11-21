import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
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

export default Login;
