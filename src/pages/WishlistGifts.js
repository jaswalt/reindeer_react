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
        this.props.fetchWishlistGifts();
    }

    render() {
        return (
            <div id="container" style={styles.container}>
                {this.props.gifts.map(gift => (
                    <EachWishlistGift
                        key={gift.pk}
                        {...gift}
                        deleteMe={() => this.props.deleteWishlistGift(gift.pk)}
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
    deleteWishlistGift: giftId => dispatch(deleteWishlistGift(giftId)),
    fetchWishlistGifts: () => dispatch(fetchWishlistGifts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishlistGiftsContainer);