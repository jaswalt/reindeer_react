import React from 'react';
import { connect } from 'react-redux';
import { fetchUserGifts, deleteGift } from './giftActions';
import GiftCard from './GiftCard';

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

function GiftContainer(props) {
    return (
        <div id="container" style={styles.container}>
            {props.gifts.map(gift => (
                <GiftCard
                    key={gift.pk}
                    fields={gift.fields}
                    deleteMe={() => props.deleteGift(gift.pk)}
                />
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    gifts: state.gifts.items,
});

const mapDispatchToProps = dispatch => ({
    deleteGift: giftId => dispatch(deleteGift(17, giftId)),
    reloadGifts: userId => dispatch(fetchUserGifts(userId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GiftContainer);
