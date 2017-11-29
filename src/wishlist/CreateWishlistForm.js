import React, {Component} from 'react';
import { Paper, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createWishlist } from '../store/actions/wishlistActions';

const styles = {
  container: {
      margin: '0 auto',
      maxWidth: '30%',
      paddingTop: 30,
      marginBottom: 30,
  },
  style: {
      marginLeft: 14,
      width: '93%',
  },
  floatingLabelFocusStyle: {
      color: '#990033',
  },
  buttons: {
      display: 'flex',
      align: 'center',
      direction: 'row',
      justifyContent: 'center',
  },
  button: {
      margin: 10,
      backgroundColor: '#990033',
      color: 'white',
  },
};

class CreateWishlistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            dateValue: '',
            formValid: false,
        };
    }
    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2}>
                    <TextField
                        className="title"
                        floatingLabelText="Title"
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.titleValue}
                        onChange={this._titleFieldHandler}
                        style={styles.style}
                    /><br/>
                    <TextField
                        className="date"
                        type="date"
                        floatingLabelFocusStyle={
                            styles.floatingLabelFocusStyle
                        }
                        value={this.state.dateValue}
                        onChange={this._dateFieldHandler}
                        style={styles.style}
                    />
                    <span style={styles.buttons}>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            onClick={this._processForm}
                        >
                            Create
                        </FlatButton>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            onClick={this._clearForm}
                        >
                            Clear
                        </FlatButton>
                    </span>
                </Paper>
            </div>
        );
    }
    /**
     *   FORM INPUT HANDLERS
     *
     */

    _titleFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            titleValue: e.target.value,
        });

    };

    _dateFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            dateValue: e.target.value,
        });

    };

    _processForm = (e) => {
        e.stopPropagation();

        if (this.state.titleValue.trim() && this.state.dateValue) {
            const wishlist = {
                title: this.state.titleValue,
                date: this.state.dateValue,
            };

            this.props.transmitForm(wishlist);
            this.props.history.push('/users/profile');
        }
    };

    _clearForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            titleValue: '',
            dateValue: '',
            formValid: false,
        });
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    transmitForm: wishlist => dispatch(createWishlist(wishlist)),
});

export default withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(CreateWishlistForm));
