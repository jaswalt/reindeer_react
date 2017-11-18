import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {
    render() {
        return(
                <AppBar
                    title="Welcome to Kaddo!"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={{backgroundColor:"#990033"}}
                />
        )
    }
}

export default NavBar;

<img src={logo} className="App-logo" alt="logo" />