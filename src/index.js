import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './app/store';
import Router from './app/Router';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
