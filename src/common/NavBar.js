import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/FlatButton';
import FlatButton from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Avatar from 'material-ui/Avatar';
import { red200 } from 'material-ui/styles/colors';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <AppBar
                title="Welcome to Kaddo!"
                
                iconElementRight={
                    <Avatar
                        icon={<AccountCircle />}
                        backgroundColor={red200}
                    />
                }
            />
        );
    }
}
