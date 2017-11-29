import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserWishlists, deleteWishlist } from '../store/actions/wishlistActions';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

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
    unHoverColor: "rgb(192,192,192)",
    hoverColor: "#FFFFFF",
};

 
class WishLists extends Component {
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    <Subheader style={{marginLeft: '15vw' }}>My Wishlists</Subheader>
                        {this.props.wishlists.map(wishlist => this.renderGridTile(wishlist))}
                    <IconButton onClick={this.handleCreateWishlist}
                                tooltip="Create Wishlist"
                                tooltipPosition="bottom-right"
                                iconStyle={{width: 60, height: 60}}
                    >
                        <AddCircle/>
                    </IconButton>
                </GridList>
            </div>
        );
    }

    renderGridTile = (wishlist) => {
        if (this.props.own) {
            return (
                <GridTile
                    key={wishlist.id}
                    title={wishlist.title}
                    subtitle={<span>by <b>{this.props.user.username}</b></span>}
                    actionIcon={
                        <IconButton
                            tooltip="Delete"
                            tooltipPosition="top-center"
                            onClick={
                                () => this.props.deleteWishlist(this.props.user.id, wishlist.id)
                            }
                        >
                            <DeleteForever color={styles.unHoverColor} hoverColor={styles.hoverColor}/>
                        </IconButton>}>
                    <img src={wishlist.image || 'http://www.goodwp.com/images/201211/goodwp.com_25947.jpg'}
                             style={{cursor: 'pointer'}}
                             onClick={(e) => this.handleTileClick(wishlist.id)}
                    />
                </GridTile>
            )
        } else {
            return (
                <GridTile
                    key={wishlist.id}
                    title={wishlist.title}
                    subtitle={<span>by <b>{this.props.user.username}</b></span>}
                >
                    <img src={wishlist.image || 'http://www.goodwp.com/images/201211/goodwp.com_25947.jpg'}
                             onMouseOver=""
                             style={{cursor: 'pointer'}}
                             onClick={(e) => this.handleTileClick(wishlist.id)}
                    />
                </GridTile>
            )
        }
    };

    handleTileClick = (wishlistId) => {
        this.props.history.push(`/users/profile/wishlists/${wishlistId}/gifts`);
    };

    handleCreateWishlist = () => {
        this.props.history.push(`profile/wishlists/create`);
    };
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
    deleteWishlist: (userId, wishlistId) => dispatch(deleteWishlist(userId, wishlistId)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishLists));