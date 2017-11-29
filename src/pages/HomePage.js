import React from 'react';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
        color: 'white',
    },
    content: {
        fontFamily: 'Great Vibes',
        fontSize: '3em',
        textAlign: 'center',
        paddingTop: 200,
        paddingLeft: 250,
        paddingRight: 250,
    },
};

export default function Main() {
    return (
        <section style={styles.container}>
            <div style={styles.content}>
                <p zDepth={5}>Find out what your loved one wants this year!</p>
            </div>
        </section>
    );
}
