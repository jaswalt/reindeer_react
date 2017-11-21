import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';
import Search from './Search';
import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <AppBar
                title="Kaddo"
                titleStyle={{
                    fontFamily: 'Great Vibes',
                }}
                showMenuIconButton={false}
                iconElementRight={isLoggedIn ? <AvatarContainer /> : <Login />}
            >
                <Search />
            </AppBar>
        );
    }
}
