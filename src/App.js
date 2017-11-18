import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <NavBar/>
          </header>
          <p className="App-intro">
            Dum dum de dum.
          </p>
        </div>
      </MuiThemeProvider> 
    );
  }
}

export default App;
