import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGift } from '../store/actions/giftActions';
import EachResult from './EachResult';

const styles = {
    container1: {
        margin: '0 auto',
        paddingTop: 30,
        maxWidth: 1100,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class SearchResults extends Component {
    constructor(props) {
		super(props);
		this.state = {
			cardTextCollapsed: true,
			displayActions: false,
		};
    }

    render() {
        return (
            <div id="container" style={styles.container}>
            	{this.props.gifts.map(gift => (
               		<EachResult
                    	key={gift.pk}
                    	{...gift}
                    	addMe={() => this.props.addGift(gift.pk)}
                	/>
            	))}
            </div>
        )
    };
}

const mapStateToProps = state => ({
    userId: state.users.profile.user_id,
    gifts: state.gifts.searchResults,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addGift: giftId => dispatch(addGift(ownProps.userId, giftId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchResults);
