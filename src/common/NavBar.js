import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Search from './Search';
import './NavBar.css';
import Login from './Login';
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
                style={{ display: 'flex', flex: '0 0 0' }}
                title="Kaddo"
                titleStyle={{
                    fontFamily: 'Great Vibes',
                    flex: '0 0 1',
                }}
                showMenuIconButton={false}
                iconElementRight={isLoggedIn ? <AvatarContainer /> :
                    <span><Login /><Register /></span>}
                iconStyleRight={{ margin: '0' }}
            >
                <Search />
            </AppBar>
        );
    }
}

NavBar.propTypes = {

};
