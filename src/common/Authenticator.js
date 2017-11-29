import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkUserToken()),
});

export default withRouter(connect(() => ({}), mapDispatchToProps)(Authenticator));
