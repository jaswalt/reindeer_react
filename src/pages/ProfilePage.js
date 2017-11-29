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
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                fontFamily: 'Roboto, sans-serif',
                palette: {
                    textColor: '#000',
                    primary1Color: '#990033',
                },
            },
        };

    }

    componentDidMount() {
        this.fetchData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        const thisProfileId = this.props.match.params.id;
        const nextProfileId = nextProps.match.params.id;
        if (thisProfileId !== nextProfileId) {
            this.fetchData(nextProps);
        }

        if (this.props.theme.color !== nextProps.theme.color) {
            this.forceUpdate();
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
                            <h1 style={{ color: this.props.theme.color, fontFamily: "'Alegreya', serif" }}>
                                {this.props.ownProfile
                                    ? `welcome back, ${this.props.profile.username}!`
                                    : `visiting ${this.props.profile.username}'s`
                                }
                            </h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div>
                                <h3 style={{ color: this.props.theme.color, fontFamily: "'Alegreya', serif" }}>wish lists</h3>
                                <Wishlists
                                    user={this.props.profile}
                                    wishlists={this.props.wishlists}
                                    own={this.props.ownProfile}
                                />
                            </div>
                            {this.props.ownProfile &&
                            <div style={{ marginLeft: 15 }}>
                                <h3 style={{ color: this.props.theme.color, fontFamily: "'Alegreya', serif" }}>friends</h3>
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
            wishlists: state.wishlists.wishlists,
            theme: state.users.activeTheme,            
        };
    } else if (state.users.profile) {
        profile = {
            userId: state.users.profile ? state.users.profile.user_id : null,
            profile: state.users.vprofile,
            ownProfile: true,
            wishlists: state.wishlists.wishlists,
            friends: state.users.profile ? state.users.friends : null,
            theme: state.users.activeTheme,            
        };
    }

    return profile;
};


export default withRouter(connect(mapStateToProps)(ProfilePage));
