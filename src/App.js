import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './components/NavBar.jsx';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
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

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#FFFFFF',
        primary1Color: '#990033',
    }
});

export default App;
