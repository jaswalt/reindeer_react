import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';

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
                iconElementRight={isLoggedIn ? <AvatarContainer /> : <Login />}
                iconStyleRight={{ margin: '0' }}
            />
        );
    }
}

NavBar.propTypes = {

};
