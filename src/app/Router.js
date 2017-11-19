import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

export default function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/:filter?" component={App} />
        </BrowserRouter>
    );
}
