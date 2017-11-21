import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';
import Search from './Search';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <AppBar
                style={{ height: '90px' }}
                title="Welcome to Kaddo!"
                // showMenuIconButton={false}
                iconElementLeft={<Search />}
                iconElementRight={isLoggedIn ? <AvatarContainer /> : <Login />}
            />
        );
    }
}
