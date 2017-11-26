import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Store } from '../store';
import Authenticator from '../common/Authenticator';
import HomePage from '../pages/HomePage';
import GiftsMain from '../pages/GiftsMain';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SearchResults from '../common/SearchResults';
import NavBar from '../common/NavBar';
import ToolBar from '../common/ToolBar';
import PrivateRoute from '../common/PrivateRoute';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#000',
        primary1Color: '#990033',
    },
});

export default function rootRouter() {
    return (
        <Provider store={Store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <BrowserRouter>
                    <Authenticator>
                        <NavBar />
                        <ToolBar />
                        <Switch>
                            <Route exact path="/user/profile" component={ProfilePage} />
                            <Route exact path="/users/register" component={RegisterPage} />
                            <Route exact path="/users/login" component={LoginPage} />
                            <PrivateRoute exact path="/gifts/" component={GiftsMain} />
                            <Route exact path="/gifts/search/results" component={SearchResults} />
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                    </Authenticator>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
}

