import React from 'react';
import './GiftsMain.css';
import GiftsList from '../gift/Gifts';
import Main from './HomePage';

export default function GiftsMain() {
    return (
        <div>
            <Main />
            <section className="gifts-main">
                <GiftsList />
            </section>
        </div>
    );
}
