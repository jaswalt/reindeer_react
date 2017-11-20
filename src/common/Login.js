import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    //  static muiName = 'FlatButton';

    render() {
        return (
            <span>
                <FlatButton {...this.props} label="Login" />
                <FlatButton {...this.props} label="Register" />
            </span>
        );
    }
}

//  Logged.muiName = 'IconMenu';

export default Login;
