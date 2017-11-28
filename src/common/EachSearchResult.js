import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Gift from 'material-ui/svg-icons/action/card-giftcard';
import AddList from 'material-ui/svg-icons/av/playlist-add';
import IconButton from 'material-ui/IconButton';
import { red50 } from 'material-ui/styles/colors';
import * as Currency from 'currency-formatter';
import GiftCard from '../gift/GiftCard';

const styles = {
    container: {
        maxWidth: 250,
        color: '#000',
        textAlign: 'left',
        margin: 10,
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    action: {
        color: '#fff !important',
    },
    actionColor: "#d9a4b7",
    hoverActionColor: "#990033"
};

class EachSearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayActions: false,
        };
    }

    render() {
        return (
            <Card className="gift-card"
                style={styles.container}
                onMouseEnter={this._showActionButtons}
                onMouseLeave={this._unshowActionButtons}
            >
                <CardHeader
                    title={this.props.name}
                    avatar={<Avatar
                        icon={<Gift />}
                        color={red50}
                        backgroundColor="#990033"

                    />}
                />
                <CardMedia>
                    <img src={this.props.image} alt="" />
                </CardMedia>
                <CardTitle subtitle={`$${this.props.price}`} />
                <CardText>
                    {this.props.description}
                </CardText>
                {this.props.isLoggedIn && this.state.displayActions &&
                    <CardActions style={styles.actions}>
                        <IconButton tooltip="+ List" tooltipPosition="top-center" onClick={this.props.addMe}><AddList color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
                    </CardActions>
                }
            </Card>
        );
    }

    _showActionButtons = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            displayActions: true,
        });
    };

    _unshowActionButtons = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            displayActions: false,
        });
    };

}

const mapStateToProps = (state) => ({
    isLoggedIn: !!state.users.profile,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps
)(EachSearchResult);