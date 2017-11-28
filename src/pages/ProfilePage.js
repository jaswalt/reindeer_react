import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        color: '#990033',
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
                <div>
                    <h1>{this.props.username}</h1>
                </div>
                <Wishlists />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    username: state.users.profile.username,
    currentUser: state.users.profile ? state.users.profile : null,
});

export default withRouter(connect(mapStateToProps)(ProfilePage));
