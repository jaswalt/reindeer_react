import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRegisterForm from '../user/UserRegisterForm';

const imageUrl = 'https://static.pexels.com/photos/257855/pexels-photo-257855.jpeg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '120vh',
    },
};

export default class RegisterPage extends Component {
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
