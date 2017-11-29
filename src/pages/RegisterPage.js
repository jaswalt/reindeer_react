import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserRegisterForm from '../user/UserRegisterForm';
import Main from './HomePage';

const imageUrl = 'https://i.pinimg.com/originals/10/e9/2c/10e92cc87b01faca927f20b2cf748dbf.jpg';

const styles = {
    container: {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
        height: '120vh',
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

export default withRouter(RegisterPage);
