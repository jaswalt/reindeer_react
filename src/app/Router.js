import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Store from './store';
import GiftsMain from '../pages/GiftsMain';
import RegisterPage from '../pages/RegisterPage';
import NavBar from "../common/NavBar";

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
                <NavBar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/users/register" component={RegisterPage} />
                        <Route exact path="/:filter?" component={GiftsMain} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
}
