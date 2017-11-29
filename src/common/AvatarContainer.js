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
                        icon={<AccountCircle style={{size: '200%'}}/>}
                        style={{
                            // backgroundColor: '#990033',
                            margin: '0',
                            marginTop: 10,
                            marginRight: 5,
                        }}
                    />
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/users/profile">
                    <MenuItem primaryText="My Profile" style={{ color: '#000' }} />
                </Link>
                <Link to="/gifts">
                    <MenuItem primaryText="My Items" style={{ color: '#000' }} />
                </Link>
                <MenuItem primaryText="Logout" style={{ color: '#000' }} onClick={this._logout} />
            </IconMenu>
        );
    }

    _logout = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('logging out');

        this.props.logout();
    }
}
