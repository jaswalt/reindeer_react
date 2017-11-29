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
    componentDidMount() {
        this.fetchData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        const thisProfileId = this.props.match.params.id;
        const nextProfileId = nextProps.match.params.id;
        if (thisProfileId !== nextProfileId) {
            this.fetchData(nextProps);
        }
    }

    fetchData(props) {
        this.props.dispatch(loadInformation(props.userId));
        props.dispatch(fetchUserWishlists(props.userId));
        if (props.ownProfile) {
            props.dispatch(loadFriends(props.userId));
        }
    }

    render() {
        return (
            <section style={styles.container}>
                {this.props.profile &&
                    <div>
                        <div>
                            <h1>
                                {this.props.ownProfile
                                    ? `Welcome back, ${this.props.profile.username}!`
                                    : `visiting ${this.props.profile.username}'s`
                                }
                            </h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div>
                                <h3>Wish Lists</h3>
                                <Wishlists
                                    user={this.props.profile}
                                    wishlists={this.props.wishlists}
                                    own={this.props.ownProfile}
                                />
                            </div>
                            {this.props.ownProfile &&
                            <div style={{ marginLeft: 15 }}>
                                <h3>Friends</h3>
                                <FriendsList friends={this.props.friends} />
                            </div>
                            }
                        </div>

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
            wishlists: !state.wishlists.wishlists ? state.wishlists.wishlists : null,
        };
    } else if (state.users.profile) {
        profile = {
            userId: state.users.profile ? state.users.profile.user_id : null,
            profile: state.users.vprofile,
            ownProfile: true,
            wishlists: state.wishlists.wishlists ? state.wishlists.wishlists : null,
            friends: state.users.profile ? state.users.friends : null,
        };
    }

    return profile;
};

export default withRouter(connect(mapStateToProps)(ProfilePage));
