import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Store from './store';
import HomePage from '../pages/HomePage';
import GiftsMain from '../pages/GiftsMain';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NavBar from '../common/NavBar';
import ToolBar from '../common/ToolBar';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#000',
        primary1Color: '#990033',
    },
});

export default function () {
    return (
        <Provider store={Store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <ToolBar />
                        <Switch>
                            <Route exact path="/users/register" component={RegisterPage} />
                            <Route exact path="/users/login" component={LoginPage} />
                            <Route exact path="/gifts/" component={GiftsMain} />
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
}
