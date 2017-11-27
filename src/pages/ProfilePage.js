import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wishlists from './Wishlists';
import updateUserForm from '../user/UserProfileForm';

const styles = {
    container: {
        margin: '0 auto',
        paddingTop: 30,
        maxWidth: 1100,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section style={styles.container}>
                <h1>Hello User!</h1>
                <updateUserForm />
            </section>
        );
    }
}

(ProfilePage).propTypes = {};

export default withRouter(ProfilePage);
