import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './GiftsMain.css';
import NavBar from '../common/NavBar';
import GiftList from '../gift/GiftSmartContainer';

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
            <div className="gifts-main">
                <header>
                    <NavBar />
                </header>
                <GiftList />
            </div>
        </MuiThemeProvider>
    );
}

