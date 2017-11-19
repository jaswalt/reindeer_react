import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './app/App';
import store from './app/store';
import registerServiceWorker from './registerServiceWorker';

const Root = rootStore => (
    <Provider store={rootStore}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
);

render(
    <Root rootStore={store} />,
    document.getElementById('root'),
);

registerServiceWorker();
