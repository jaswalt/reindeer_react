import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import IconMenu from 'material-ui/IconMenu';
import Login from './Login';
import Search from './Search';
import './NavBar.css';
import Register from './Register';

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
                title="Kaddo"
                titleStyle={{
                    fontFamily: 'Great Vibes',
                }}
                showMenuIconButton={false}
                iconElementRight={
                    <div>
                        {<Register />}
                        {isLoggedIn ? <AvatarContainer /> : <Login />}
                    </div>
                }
            >
                <Search />
            </AppBar>
        );
    }
}
