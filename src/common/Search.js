import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';

export default class Search extends Component {
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
            axios.get(`http://localhost:8000/api/v1/gifts/${this.state.content}`)
                .then(resp => {
                    //do something with the response
                    console.log(resp.data)
                    this.setState({
                        content: ''
                    })
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
                //onRequestSearch={} for handing the search button 
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
