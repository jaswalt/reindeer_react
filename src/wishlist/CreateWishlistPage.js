import React, { Component } from 'react';
import CreateWishlistForm from './CreateWishlistForm';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
    },
};

class CreateWishlistPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div style={styles.container}>
                <CreateWishlistForm />
            </div>
        );
    }
}

export default CreateWishlistPage;
