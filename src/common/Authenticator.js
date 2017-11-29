import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { checkUserToken, changeTheme } from '../store/actions/userActions';

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
                    primary1Color: '#990033',
                },
            },
        };

        this.props.checkToken();
        this.props.changeTheme();
    }
/*     componentWillMount() {
        this.props.checkToken();
        this.props.changeTheme();
    } */

    componentWillReceiveProps(nextProps) {
        if (this.props.theme && this.props.theme.color !== nextProps.theme.color) {
            this.setState({
                theme: {
                    fontFamily: 'Roboto, sans-serif',                    
                    palette: {
                        textColor: '#000',
                        primary1Color: nextProps.theme.color,
                    },
                },
            });
        }
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
    changeTheme: () => dispatch(changeTheme('Christmas')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticator));
