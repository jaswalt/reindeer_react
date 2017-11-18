import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './components/NavBar.jsx';

class App extends Component {
<<<<<<< HEAD

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
=======
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <header>
                        <NavBar/>
                    </header>
                    <p className="App-intro">
                      Dum dum de dum.
                    </p>
                </div>
            </MuiThemeProvider> 
>>>>>>> 50a05e2c624b9cc7da025f87187144f36757b190
        );
    }
}

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#FFFFFF',
        primary1Color: '#990033',
    },
<<<<<<< HEAD
    appBar: {

    },
=======
>>>>>>> 50a05e2c624b9cc7da025f87187144f36757b190
});

export default App;
