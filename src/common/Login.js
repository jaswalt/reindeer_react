import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <Link to="/users/login">
                    <FlatButton {...this.props} label="Login" />
                </Link>
                <Link to="/users/register">
                    <FlatButton {...this.props} label="Register" />
                </Link>
            </div>
        );
    }
}
