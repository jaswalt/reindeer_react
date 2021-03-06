import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import { Store } from '../store';
import Authenticator from '../common/Authenticator';
import HomePage from '../pages/HomePage';
import GiftsMain from '../pages/GiftsMain';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import WishlistGifts from '../wishlist/WishlistGifts';
import SearchResults from '../common/SearchResults';
import CreateWishlistPage from '../wishlist/CreateWishlistPage';
import NavBar from '../common/NavBar';
import ToolBar from '../common/ToolBar';
import FriendsSearchPage from '../user/FriendsSearch';
import PrivateRoute from '../common/PrivateRoute';


export default function rootRouter() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Authenticator>
                    <NavBar />
                    <ToolBar />
                    <Switch>
                        <Route exact path="/users/profile/wishlists/create" component={CreateWishlistPage} />
                        <Route exact path="/users/profile/wishlists/:id/gifts" component={WishlistGifts} />
                        <Route exact path="/users/profile" component={ProfilePage} />
                        <Route exact path="/users/profile/:id" component={ProfilePage} />
                        <Route exact path="/users/register" component={RegisterPage} />
                        <Route exact path="/users/login" component={LoginPage} />
                        <Route exact path="/users/search/results" component={FriendsSearchPage} />
                        <PrivateRoute exact path="/gifts/" component={GiftsMain} />
                        <Route exact path="/gifts/search/results" component={SearchResults} />
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Authenticator>
            </BrowserRouter>
        </Provider>
    );
}

