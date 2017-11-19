import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../App.css';
import NavBar from './NavBar';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#FFFFFF',
        primary1Color: '#990033',
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <header>
                        <NavBar />
                    </header>
                    <p className="App-intro">
                        Dum dum de dum.
                    </p>
                </div>
            </MuiThemeProvider>
        );
    }
}
