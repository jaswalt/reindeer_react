import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GiftsMain from '../pages/GiftsMain';

export default function () {
    return (
        <BrowserRouter>
            <Route exact path="/:filter?" component={GiftsMain} />
        </BrowserRouter>
    );
}
