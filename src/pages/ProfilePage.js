import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wishlists from '../wishlist/Wishlists';
import FriendsList from '../user/FriendsList';
import { loadFriends, loadInformation } from '../store/actions/userActions';
import { fetchUserWishlists } from "../store/actions/wishlistActions";

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
    componentWillMount() {
        this.props.dispatch(loadInformation(this.props.userId));
        this.props.dispatch(fetchUserWishlists(this.props.userId));
        if (this.props.ownProfile) {
            this.props.dispatch(loadFriends(this.props.userId));
        }
    }

    render() {
        return (
            <section style={styles.container}>
                {this.props.profile &&
                    <div>
                        <div>
                            <h1>{this.props.profile.username}</h1>
                        </div>
                        <Wishlists
                            user={this.props.profile}
                            wishlists={this.props.wishlists}
                            own={this.props.ownProfile}
                        />
                        {this.props.ownProfile &&
                            <div>
                                <h3>Friends</h3>
                                <FriendsList />
                            </div>
                        }
                    </div>
                }
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let profile = {};

    if (ownProps.match.params.id) {
        profile = {
            userId: ownProps.match.params.id,
            profile: state.users.vprofile,
            ownProfile: false,
            wishlists: !!state.wishlists.wishlists ? state.wishlists.wishlists : null,
        };
    } else {
        profile = {
            userId: state.users.profile.user_id,
            profile: state.users.vprofile,
            ownProfile: true,
            wishlists: !!state.wishlists.wishlists ? state.wishlists.wishlists : null,
        };
    }

    return profile;
};

export default withRouter(connect(mapStateToProps)(ProfilePage));
