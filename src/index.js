import 'typeface-roboto';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Router from './app/Router';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router />, document.getElementById('root'),
);

registerServiceWorker();
