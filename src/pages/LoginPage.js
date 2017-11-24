import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserLoginForm from '../user/UserLoginForm';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
    },
};

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <UserLoginForm/>
            </div>
        );
    }
}

(LoginPage).propTypes = {};
