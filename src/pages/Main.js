import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../common/NavBar';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#000',
        primary1Color: '#990033',
    },
});
const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';
const styles = {
    backgroundImage: 'url(' + imageUrl + ')',
    backgroundSize: 'cover',
    height: '100vh',
};

export default function Main() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div style={styles}>
                <header className="nav-bar">
                    <NavBar />
                </header>
            </div>
        </MuiThemeProvider>
    );
}
