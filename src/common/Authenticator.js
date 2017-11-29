import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { checkUserToken } from '../store/actions/userActions';

/* const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: '#000',
        primary1Color: this.props.theme.color,
    },
}); */

class Authenticator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                fontFamily: 'Roboto, sans-serif',
                palette: {
                    textColor: '#000',
                    primary1Color: this.props.theme.color,
                },
            },
        };
    }
    componentWillMount() {
        this.props.checkToken();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.users.activeTheme,
});

const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkUserToken()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticator));
