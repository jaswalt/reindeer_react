import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../pages/Main';

export default function () {
    return (
        <BrowserRouter>
            <Route exact path="/:filter?" component={Main} />
        </BrowserRouter>
    );
}
