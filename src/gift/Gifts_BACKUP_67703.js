import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

        this.state = {
            ownProfile: false,
        }
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            this.props.fetchGifts(this.props.match.params.id);
            this.setState({
                ownProfile: false,
            })
        } else if (this.props.userId && !this.props.match.params.id) {
            this.props.fetchGifts(this.props.userId);
            this.setState({
                ownProfile: true,
            })
        }
    }

    render() {
        return (
            <div id="container" style={styles.container}>
                {this.props.gifts.length > 0 ?
                    this.props.gifts.map(gift => (
                    <GiftCard
                        key={gift.pk}
                        {...gift}
                        deleteMe={() => this.props.deleteGift(gift.pk)}
                    />
                )) :
                <p>NO GIFTS FOR YOU</p>}
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
    fetchGifts: userId => dispatch(fetchUserGifts(userId)),
});

<<<<<<< Updated upstream
export default connect(mapStateToProps, mapDispatchToProps)(GiftContainer);
=======
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(GiftContainer));
>>>>>>> Stashed changes
