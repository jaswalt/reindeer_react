import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWishlistGifts, deleteWishlistGift } from '../store/actions/wishlistActions';
import EachWishlistGift from './EachWishlistGift';

const styles = {
    container: {
        margin: '0 auto',
        paddingTop: 30,
        maxWidth: 1100,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
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
                {this.props.gifts.map(gift => (
                    <EachWishlistGift
                        key={gift.id}
                        {...gift}
                        deleteMe={() => this.props.deleteWishlistGift(gift.id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gifts: state.wishlists.gifts,
});

const mapDispatchToProps = (dispatch) => ({
    deleteWishlistGift: giftId => dispatch(deleteWishlistGift(**WISHLISTID**, giftId)),
    fetchWishlistGifts: (wishlistId) => dispatch(fetchWishlistGifts(wishlistId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishlistGiftsContainer);