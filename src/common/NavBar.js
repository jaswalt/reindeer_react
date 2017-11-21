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
                style={{ display: 'flex', flex: '0 0 0' }}
                title="Kaddo"
                titleStyle={{
                    fontFamily: 'Great Vibes',
                    flex: '0 0 1',
                }}
                showMenuIconButton={false}
                iconElementRight={isLoggedIn ? <AvatarContainer /> : <Login />}
                iconStyleRight={{ margin: '0' }}
            >
                <Search />
            </AppBar>
        );
    }
}
