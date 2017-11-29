import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteWishlist } from '../store/actions/wishlistActions';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
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
                {this.renderGrid()}
            </div>
        );
    }

    renderGrid = () => {
        if (this.props.own) {
            return (
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {this.props.wishlists.map(wishlist => this.renderGridTile(wishlist))}
                    {this.renderCreateButton()}
                </GridList>
            )
        } else {
            return (
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {this.props.wishlists.map(wishlist => this.renderGridTile(wishlist))}
                </GridList>
            )
        }
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
                             style={{cursor: 'pointer'}}
                             onClick={(e) => this.handleTileClick(wishlist.id)}
                    />
                </GridTile>
            )
        }
    };

    renderCreateButton = () => {
        return (
            <IconButton onClick={this.handleCreateWishlist}
                        tooltipPosition="bottom-right"
                        iconStyle={{width: 60, height: 60}}
            >
                <AddCircle/>
            </IconButton>
        )
    };

    handleTileClick = (wishlistId) => {
        this.props.history.push(`/users/profile/wishlists/${wishlistId}/gifts`);
    };

    handleCreateWishlist = () => {
        this.props.history.push(`profile/wishlists/create`);
    };
}

const mapDispatchToProps = (dispatch) => ({
    deleteWishlist: (userId, wishlistId) => dispatch(deleteWishlist(userId, wishlistId)),
});

export default withRouter(connect(
    null,
    mapDispatchToProps,
)(WishLists));