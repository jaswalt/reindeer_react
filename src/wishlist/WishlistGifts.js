import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWishlistGifts, deleteWishlistGift } from '../store/actions/wishlistActions';
import EachWishlistGift from '../gift/EachWishlistGift';

const imageUrl = 'https://78.media.tumblr.com/58aa0024f8c0faded38d71decf1d055c/tumblr_inline_mxyiybl7ke1r9zbix.jpg';

const styles = {
    container: {
        margin: '0 auto',
        paddingTop: 30,
        maxWidth: 1100,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    noGifts: {
        color: 'black',
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '80vh',
        width: '100vh',
    },
};

class WishlistGiftsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWishlistGifts(this.props.match.params.id);
    }

    render() {
        return (
            <div id="container" style={styles.container}>
                {this.props.gifts.length > 0 ?
                    this.props.gifts.map(gift => (
                        <EachWishlistGift
                            key={gift.id}
                            {...gift}
                            deleteMe={() => this.props.deleteWishlistGift(gift.id)}
                        />
                    )) :
                    <p style={styles.noGifts}></p>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gifts: state.wishlists.gifts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteWishlistGift: giftId => dispatch(deleteWishlistGift(ownProps.match.params.id, giftId)),
    fetchWishlistGifts: (wishlistId) => dispatch(fetchWishlistGifts(wishlistId)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishlistGiftsContainer));