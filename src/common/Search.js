import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGift } from '../store/actions/giftActions';
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
            this.props.dispatch(searchGift(this.state.content));
            this.setState({
                content: ''
            })
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
