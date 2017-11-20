import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import { red200 } from 'material-ui/styles/colors';

export default class AvatarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <IconMenu
                style={{ margin: '10px' }}
                // {...props}
                iconButtonElement={
                    <Avatar
                        icon={<AccountCircle
                            style={{ height: '50px' }}
                        />}
                        backgroundColor={red200}
                    />
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem primaryText="My Items" style={{ color: '#000' }} />
                <MenuItem primaryText="My Lists" style={{ color: '#000' }} />
                <MenuItem primaryText="Friends" style={{ color: '#000' }} />
                <MenuItem primaryText="Logout" style={{ color: '#000' }} />

            </IconMenu>
        );
    }
}
