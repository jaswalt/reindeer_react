import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',

        };
    }

    onContent = (event) => {
        this.setState({content: event.target})
    }

    onContentEnter = (event) => {
        if(event.key == 'Enter'){
            // send GET request to api with a list of gifts
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
                //onRequestSearch={this.onContentEnter}
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
