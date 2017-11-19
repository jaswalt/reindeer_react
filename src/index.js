import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { Store } from './app/store';
import Router from './app/Router';
import registerServiceWorker from './registerServiceWorker';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router />
    </Provider>
);

render(
    <Root store={Store} />,
    document.getElementById('root'),
);

registerServiceWorker();
