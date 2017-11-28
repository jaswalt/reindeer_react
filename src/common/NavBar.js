import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';
import { logoutUser } from '../store/actions/userActions';

const styles = {
    title: {
        fontFamily: 'Great Vibes',
        fontSize: '4em',
        paddingLeft: '3vw',
    },
};

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    handleTitleClick = (e) =>{
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <AppBar
                title="Kaddo"
                onTitleTouchTap={this.handleTitleClick}
                titleStyle={styles.title}
                style={{ padding: '1em' }}
                zDepth={5}
                showMenuIconButton={false}
                iconElementRight={this.props.isLoggedIn
                    ? <AvatarContainer logout={() => this.props.dispatch(logoutUser())} />
                    : <Login />
                }
                iconStyleRight={{ margin: '0' }}
            />
        );
    }
}

NavBar.propTypes = {

};

const mapStateToProps = state => ({
    isLoggedIn: state.users.profile,
});

export default withRouter(connect(mapStateToProps)(NavBar));
