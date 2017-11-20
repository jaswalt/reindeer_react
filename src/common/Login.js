import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
          <span>
              <FlatButton {...this.props} label="Login" />
              <FlatButton {...this.props} label="Register" />
          </span>
        );
      }
    } 

    Logged.muiName = 'IconMenu';

class AppBarExampleComposition extends Component {
    state = {
        logged: true,
    };  
    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                <Toggle
                label="Logged"
                defaultToggled={true}
                onToggle={this.handleChange}
                labelPosition="right"
                style={{margin: 20}}
                />
            </div>
        );
    }; 
};

export default Login;