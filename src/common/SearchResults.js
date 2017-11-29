import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGiftToAllGifts } from '../store/actions/giftActions';
import EachSearchResult from './EachSearchResult';
import Snackbar from 'material-ui/Snackbar';


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

class SearchResults extends Component {
    constructor(props) {
		super(props);
		this.state = {
			cardTextCollapsed: true,
            displayActions: false,
            open: false,
		};
    }

    render() {

        return (
            <div id="container" style={styles.container}>
                {this.props.gifts.map((gift, i) => (
                    <EachSearchResult
                        key={i}
                        {...gift}
                        addMe={() => this.props.addGift(this.props.user.user_id, gift)}
                        openSnackBar={this.handleAddGift}
                    />
                ))}
                <Snackbar
                    open={this.state.open}
                    message="Gift added to your list!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    };
    handleAddGift = () => {
        this.setState({
            open: true,
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
}

const mapStateToProps = (state) => ({
    gifts: state.gifts.searchResults,
    user: !!state.users.profile ? state.users.profile : null
});

const mapDispatchToProps = (dispatch) => ({
    addGift: (userId, gift) => dispatch(addGiftToAllGifts(userId, gift)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchResults);
