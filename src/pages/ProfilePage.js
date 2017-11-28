import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wishlists from './Wishlists';

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
                <Wishlists />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.users.profile ? state.users.profile.user_id : null,
});

(ProfilePage).propTypes = {};

export default withRouter(ProfilePage);
