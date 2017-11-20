import React, { Component } from 'react';
import GiftCard from '../gift/GiftCard';

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

export default class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id="container" style={styles.container}>
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
                <GiftCard />
            </div>
        );
    }
}
