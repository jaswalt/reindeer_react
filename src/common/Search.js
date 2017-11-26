import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGift } from '../gift/giftActions';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';

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
            this.props.dispatch(searchGift(this.state.content));
        }
    }

    render() {
        return (
            <SearchBar
                spellCheck={true}
                onChange={this.onContent}
                onKeyPress={this.onContentEnter}
                value={this.state.content}
                hintText="Search for an item"
                style={{ 
                    margin: '0 auto', 
                    maxWidth: 800, 
                    marginRight: '30vw',
                    width: '600px',
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

export default connect(
    mapStateToProps,
)(Search);