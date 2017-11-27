import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';
import Main from './HomePage';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
    },
};

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <UserRegisterForm />
            </div>
        );
    }
}

(RegisterPage).propTypes = {};

export default withRouter(RegisterPage);

