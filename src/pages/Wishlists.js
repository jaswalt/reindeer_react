import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserWishlists, deleteWishlist } from '../store/actions/wishlistActions';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

 
class WishLists extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchWishlists()
    }

    render() {
        const pics = [
            'http://s1.1zoom.me/big0/449/345838-admin.jpg', 
            'https://www.legarrick.co.uk/wp-content/uploads/2014/05/xmas-le-garrick-700x400.jpg',
            'http://www.goodwp.com/images/201211/goodwp.com_25947.jpg',
            'http://longwallpapers.com/Desktop-Wallpaper/gold-holiday-wallpapers-for-iphone-For-Desktop-Wallpaper.jpg',
            'http://starliteloungewinebar.com/wp-content/uploads/new-years-glassware-700x614.jpg',
            'http://www.crossfitbothell.com/wp-content/uploads/2016/12/eating-chocolate-daily-is-good-for-health980-1456212647_980x457.jpg',
            'http://www.goodwp.com/large/201103/15589.jpg',
            'https://i.pinimg.com/736x/a5/0a/96/a50a96b6f408404cc71a014652708d77--christmas-wedding-christmas-drinks.jpg',
            'https://i.pinimg.com/originals/63/c2/90/63c290f0666144c5662d5b374d3bf295.jpg'
        ]

        // selecting a pic from array of pics
        const pickAPic = function () {
            const pic = pics[Math.floor(Math.random() * 8)];
            return pic;
        };

        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    <Subheader style={{marginLeft: '15vw' }}>My Wishlists</Subheader>
                    {this.props.wishlists.map((wishlist, index) => (
                        <GridTile
                            onClick={(e) => this.handleClick(wishlist.id)}
                            key={index}
                            title={wishlist.title}
                            subtitle={<span>by <b>{this.props.username}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                        <img src={pickAPic()} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
    handleClick = (wishlistId) => {
        this.props.history.push('/user/profile/wishlist');
    }
}

const mapStateToProps = state => ({
    username: state.users.profile.username,
    userId: state.users.profile.user_id,
    wishlists: !!state.wishlists.wishlists ? state.wishlists.wishlists : null,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteWishlist: wishlistId => dispatch(deleteWishlist(ownProps.userId, wishlistId)),
    fetchWishlists: () => dispatch(fetchUserWishlists()),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishLists));