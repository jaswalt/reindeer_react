import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './GiftsMain.css';
import NavBar from '../common/NavBar';
import GiftsList from '../gift/Gifts';
import SortBy from '../common/SortBy';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#000',
        primary1Color: '#990033',
    },
});

export default function GiftsMain() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <header className="nav-bar">
                    <NavBar />
                </header>
                <section className="gifts-main">
                    <GiftsList />
                </section>
                <div className="sort-by">
                    <SortBy />
                </div>
            </div>
        </MuiThemeProvider>
    );
}

