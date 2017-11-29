import React, { Component } from 'react';
import UserLoginForm from '../user/UserLoginForm';
import Main from './HomePage';

const imageUrl = 'https://i.pinimg.com/originals/10/e9/2c/10e92cc87b01faca927f20b2cf748dbf.jpg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '100vh',
    },
};

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div style={styles.container}>
                <UserLoginForm />
            </div>
        );
    }
}

export default LoginPage;
