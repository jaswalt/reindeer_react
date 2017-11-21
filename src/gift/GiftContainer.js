import React from 'react';
import GiftCard from './GiftCard';

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

export default function GiftContainer(props) {
    return (
        <div id="container" style={styles.container}>
            {props.gifts.map(gift => (
                <GiftCard
                    key={gift.pk}
                    pk={gift.pk}
                    fields={gift.fields}
                />
            ))}
        </div>
    );
}
