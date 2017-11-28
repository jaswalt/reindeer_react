import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        color: '#990033',
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
                <div>
                    <h1>{this.props.currentUser.username}</h1>
                </div>
                <div>
                    <Wishlists />
                    <FriendsList />
                </div>
                
            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.users.profile ? state.users.profile : null,
});

export default withRouter(connect(mapStateToProps)(ProfilePage));
