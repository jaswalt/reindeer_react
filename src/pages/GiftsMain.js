import React, { Component } from 'react';
import './GiftsMain.css';
import Snackbar from 'material-ui/Snackbar';
import GiftsList from '../gift/Gifts';

export default class GiftsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,            
        }
    }
    render() {
        return (
            <section className="gifts-main">
                <GiftsList openSnackBar={this.handleAddGift} />
                <Snackbar
                    open={this.state.open}
                    message="Gift added to your wishlist!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </section>
    
        );
    }
    
    handleAddGift = () => {
        this.setState({
            open: true,
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
}
