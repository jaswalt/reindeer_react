import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkUserToken } from '../store/actions/userActions';

class Authenticator extends Component {
    componentWillMount() {
        this.props.checkToken();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Authenticator.propTypes = {
    checkToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkUserToken()),
});

export default withRouter(connect(() => ({}), mapDispatchToProps)(Authenticator));
