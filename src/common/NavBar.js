import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import AvatarContainer from './AvatarContainer';
import Login from './Login';

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

    render() {
        return (
            <AppBar
                title="Kaddo"
                titleStyle={styles.title}
                style={{ padding: '1em' }}
                showMenuIconButton={false}
                iconElementRight={this.props.isLoggedIn ? <AvatarContainer /> : <Login />}
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

export default withRouter(connect(mapStateToProps, null, null, {pure: false})(NavBar));

