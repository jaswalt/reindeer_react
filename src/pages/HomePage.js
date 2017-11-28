import React from 'react';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
    },
};

export default function Main() {
    return (
        <div style={styles.container} />
    );
}
