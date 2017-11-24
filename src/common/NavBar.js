import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';

const styles = {
    title: {
        fontFamily: 'Great Vibes',
        fontSize: '4em',
        paddingLeft: '3vw',
    },
};

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
                titleStyle={styles.title}
                style={{ padding: '1em' }}
                showMenuIconButton={false}
                iconElementRight={isLoggedIn ? <AvatarContainer /> : <Login />}
                iconStyleRight={{ margin: '0' }}
            />
        );
    }
}

NavBar.propTypes = {

};
