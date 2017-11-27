import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import { Link } from 'react-router-dom';

export default class AvatarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <IconMenu
                style={{ padding: '0' }}
                iconButtonElement={
                    <Avatar
                        icon={<AccountCircle />}
                        style={{
                            backgroundColor: '#d9a4b7',
                            margin: '0',
                        }}
                    />
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/user/profile">
                    <MenuItem primaryText="My Profile" style={{ color: '#000' }} />
                </Link>
                <Link to="/gifts">
                    <MenuItem primaryText="My Items" style={{ color: '#000' }} />
                </Link>                
                <Link to="/user/friends">
                    <MenuItem primaryText="Friends" style={{ color: '#000' }} />
                </Link>
                <Link to="/">
                    <MenuItem primaryText="Logout" style={{ color: '#000' }} />
                </Link>
            </IconMenu>
        );
    }
}
