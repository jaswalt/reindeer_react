import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchGift } from '../store/actions/giftActions';
import { searchUsers } from '../store/actions/userActions';
import SearchBar from 'material-ui-search-bar';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };
    }

    onContent = (value) => {
        this.setState({content: value})
    }

    onContentEnter = (event) => {
        if(event.key == 'Enter'){
            // send GET request to api with a list of gifts
            if (this.state.content[0] === '@') {
                const name = this.state.content.substring(1);
                this.props.dispatch(searchUsers(name));
                this.props.history.push('/users/search/results');
                this.setState({
                    content: ''
                });
            } else {
                this.props.dispatch(searchGift(this.state.content));
                this.props.history.push('/gifts/search/results');
                this.setState({
                    content: ''
                });
            }
        }
    }

    render() {
        return (
            <SearchBar
                spellCheck={true}
                onChange={this.onContent}
                onKeyPress={this.onContentEnter}
                value={this.state.content}
                hintText="Search for an item or a user"
                style={{
                    margin: '0 auto',
                    maxWidth: 800,
                    marginRight: '0vw',
                    width: '300px',
                    marginTop: '0.25em'
                }}
            />

        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default withRouter(connect(
    mapStateToProps,
)(Search));
