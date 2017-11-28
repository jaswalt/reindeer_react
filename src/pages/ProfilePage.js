import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function ProfilePage(props) {
    return (
        <section style={styles.container}>
            {props.users.map(user => (
                <div>
                    <h1>{user.username}</h1>
                    {user.first_name}
                </div>
            ))}
            <Wishlists />
        </section>
    );
}

const mapStateToProps = state => ({
    users: state.users.usersSearch,
    currentUser: state.users.profile ? state.users.profile.user_id : null,
});

export default connect(mapStateToProps)(ProfilePage);
