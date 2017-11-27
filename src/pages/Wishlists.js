import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    <Subheader style={{marginLeft: '15vw' }}>My Wishlists</Subheader>
                    {this.props.wishlists.map((wishlist) => (
                        <GridTile
                            key={wishlist.pk}
                            title={wishlist.title}
                            subtitle={<span>by <b>{this.props.username}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                        <img src={wishlist.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishLists);