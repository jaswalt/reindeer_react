import React from 'react';
import './GiftsMain.css';
import GiftsList from '../gift/Gifts';
import SortBy from '../common/SortBy';



export default function GiftsMain() {
    return (
        <div>
            <section className="gifts-main">
                <GiftsList />
            </section>
            <div className="sort-by">
                <SortBy />
            </div>
        </div>
    );
}