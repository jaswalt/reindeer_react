import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Wishlists from './Wishlists';
import FriendsList from './FriendsList';

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

    componentDidMount() {
    }

    render() {
        return (
            <section style={styles.container}>
                <h1>Hello User!</h1>
                <Wishlists />
                <FriendsList />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.users.profile,
});

export default withRouter(connect(mapStateToProps)(ProfilePage));
