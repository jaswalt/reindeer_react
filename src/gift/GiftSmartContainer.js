import { connect } from 'react-redux';
import { fetchUserGifts, deleteGift } from './giftActions';
import GiftContainer from './GiftContainer';

const mapStateToProps = state => ({
    gifts: state.gifts.items,
});

const mapDispatchToProps = dispatch => ({
    deleteGift: id => dispatch(deleteGift(id)),
    reloadGifts: userId => dispatch(fetchUserGifts(userId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GiftContainer);
