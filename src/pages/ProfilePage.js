import React, { Component } from 'react';
import Wishlists from './Wishlists';
// import UserProfileForm from '../user/UserProfileForm';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section>
                <h1>Hello User!</h1>
                <Wishlists />
            </section>
        );
    }
}
