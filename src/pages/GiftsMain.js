import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './GiftsMain.css';
import NavBar from '../common/NavBar';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#FFFFFF',
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
                <p className="gifts-main-intro">
                        Dum dum de dum.
                </p>
            </div>
        </MuiThemeProvider>
    );
}

