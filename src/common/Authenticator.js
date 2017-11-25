import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { checkUserToken } from '../user/userActions';

class Authenticator extends Component {
    constructor(props) {
        super(props);
    }

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

(Authenticator).propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    checkToken: () => dispatch(checkUserToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator);