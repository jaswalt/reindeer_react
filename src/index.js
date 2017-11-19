import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './app/App';
import Store from './app/store';
import registerServiceWorker from './registerServiceWorker';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route exact path="/:filter?" component={App} />
        </Router>
    </Provider>
);

render(
    <Root store={Store} />,
    document.getElementById('root'),
);

registerServiceWorker();
