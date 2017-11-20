import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <AppBar
                style={{ height: '90px' }}
                title="Welcome to Kaddo!"
                showMenuIconButton={false}
                iconElementRight={
                    <AvatarContainer />
                }
            />
        );
    }
}
