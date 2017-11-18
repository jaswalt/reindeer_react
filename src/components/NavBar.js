import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import account_circle from '../avatar.svg'
import Avatar from 'material-ui/Avatar'

class NavBar extends Component {
    render() {
        return(
            <AppBar
                title="Welcome to Kaddo!"
                iconElementRight={<Avatar icon={<account_circle/>}/>}
            />
        )
    }
}

export default NavBar;