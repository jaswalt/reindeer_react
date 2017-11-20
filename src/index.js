import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Store from './app/store';
import Router from './app/Router';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={Store}>
        <Router />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
