import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            rest.loggedIn ? <Component {...props} /> : <Redirect to='/users/login'/>
        )} />
    )
};

(PrivateRoute).propTypes = {};

const mapStateToProps = (state) => ({
    loggedIn: !!state.users.profile,
});

export default connect(mapStateToProps)(PrivateRoute);