import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <SearchBar
                // onChange={() => console.log('onChange')}
                // onRequestSearch={() => console.log('onRequestSearch')}
                hintText="Search for an item"
                style={{ margin: '3px' }}
            />
        );
    }
}
