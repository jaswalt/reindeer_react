import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = {
    container: {
        margin: '0 auto',
        maxWidth: '400px',
        paddingTop: 30,
        marginBottom: 30,
    },
    field: {
        marginLeft: 14,
        width: '93%',
    },
    floatingLabelFocusStyle: {
        color: '#990033',
    },
    errorStyle: {
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
    }
};


class UserProfileForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstnameValue: '',
            firstnameError: '',

            lastnameValue: '',
            lastnameError: '',

            dobValue: '',
            dobError: '',

            formValid: false,
        };

        this._validateFirstname = this._validateFirstname.bind(this);
        this._validateLastname = this._validateLastname.bind(this);
        this._validateDOB = this._validateDOB.bind(this);
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper zDepth={2}>
                    <TextField
                        className="firstname"
                        type="name"
                        floatingLabelText="First Name"
                        value={this.state.firstnameValue}
                        errorText={this.state.firstnameError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={this._firstnameFieldHandler}
                        onBlur={this._validateFirstname}
                        style={styles.field}
                    />
                    <TextField
                        className="lastname"
                        type="name"
                        floatingLabelText="Last Name"
                        value={this.state.lastnameValue}
                        errorText={this.state.lastnameError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={this._lastnameFieldHandler}
                        onBlur={this._validateLastname}
                        style={styles.field}
                    /><br/>
                    <TextField
                        className="dob"
                        floatingLabelText="Birthday"
                        errorText={this.state.dobError}
                        errorStyle={styles.errorStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.dobValue}
                        onChange={this._dobFieldHandler}
                        onBlur={this._validateDOB}
                        style={styles.field}
                    />
                    <span style={styles.buttons}>
                        <FlatButton
                            hoverColor="#990033"
                            style={styles.button}
                            onClick={this._processForm}
                        >
                            Update Info
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

    /*
     *    Form Input Handlers
     */

    _firstnameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            firstnameValue: e.target.value,
        });
    };

    _lastnameFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            lastnameValue: e.target.value,
        });
    };

    _dobFieldHandler = (e) => {
        e.stopPropagation();

        this.setState({
            dobValue: e.target.value.trim(),
        });

    };

    /**
     *   Form Validators
     */

    _validateFirstname = (e) => {
        e.stopPropagation();

        if (!this.state.firstnameValue) {
            this.setState({
                firstnameError: 'Required',
            });
        } else {
            this.setState(prevState => ({
                firstnameValue: prevState.firstnameValue.trim(),
                firstnameError: '',
            }));
        };
    };

    _validateLastname = (e) => {
        e.stopPropagation();

        if (!this.state.lastnameValue) {
            this.setState({
                lastnameError: 'Required',
            });
        } else {
            this.setState(prevState => ({
                lastnameValue: prevState.lastnameValue.trim(),
                lastnameError: '',
            }));
        };
    };

    _validateDOB(e) {
        e.stopPropagation();

        const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!this.state.dobValue) {
            this.setState({
                dobError: 'Required',
            });
        } else if (!re.test(this.state.dobValue)) {
            this.setState({
                dobError: 'Birthday not valid',
            });
        } else {
            this.setState({
                dobError: '',
            });
        }
    };


    /**
     *    Form Submission Handlers
     */

    _processForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this._validateForm(e);
    }

    _validateForm = (e) => {
        this._validateFirstname(e);
        this._validateLastname(e);
        this._validateDOB(e);

        const {
            firstnameError,
            lastnameError,
            dob, } = this.state;
        
        if (firstnameError ||
            lastnameError || dobError) {
            
            this.setState({
                formValid: false,
            });
        } else {
            this.setState({
                formValid: true,
            });

            this._sendForm();
        }
    }

    _sendForm = () => {
        const userForm = {
            first_name: this.state.firstnameValue,
            last_name: this.state.lastnameValue,
            dob: this.state.dobValue,
        };

        this.props.transmitForm(userForm);
    }

    _clearForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            firstnameValue: '',
            firstnameError: '',

            lastnameValue: '',
            lastnameError: '',

            dobValue: '',
            dobError: '',

            formValid: false,
        })
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        waitingServer: state.users.loading,
        serverError: state.users.error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        transmitForm: (userForm) => dispatch(updateUser(userForm)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm);
