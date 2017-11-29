import React, { Component } from 'react';
import CreateWishlistForm from './CreateWishlistForm';
import { connect } from 'react-redux';

class CreateWishlistPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                container: {
                    backgroundImage: 'url(' + this.props.theme.image + ')',
                    backgroundSize: 'cover',
                    height: '100vh',
                    color: 'white',
                },
            },
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.theme.image !== nextProps.theme.image) {
            this.setState({
                theme: {
                    container: {
                        backgroundImage: 'url(' + nextProps.theme.image + ')',
                        backgroundSize: 'cover',
                        height: '100vh',
                        color: 'white',
                    },
                },
            });
        }
    }

    render() {
        return (
            <div style={this.state.theme.container}>
                <CreateWishlistForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.users.activeTheme,
});

export default connect(mapStateToProps)(CreateWishlistPage);
