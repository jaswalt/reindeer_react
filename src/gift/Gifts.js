import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGifts, deleteGift } from '../store/actions/giftActions';
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

class GiftContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGifts();
    }

    render() {
        return (
            <div id="container" style={styles.container}>
                {this.props.gifts.map(gift => (
                    <GiftCard
                        key={gift.pk}
                        {...gift}
                        deleteMe={() => this.props.deleteGift(gift.pk)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.users.profile.user_id,
    gifts: state.gifts.items,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteGift: giftId => dispatch(deleteGift(ownProps.userId, giftId)),
    fetchGifts: () => dispatch(fetchUserGifts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GiftContainer);
