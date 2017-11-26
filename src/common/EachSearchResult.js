import React, { Component } from 'react';
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

export default class EachSearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayActions: false,
        };
    }

    render() {
        return (
            <Card className="gift-card" style={styles.container} onMouseEnter={this._showActionButtons}>
                <CardHeader
                    title={this.props.name}
                    subtitle="Gift"
                    avatar={<Avatar
                        icon={<Gift />}
                        color={red50}
                        backgroundColor="#990033"
    
                    />}
                />
                <CardMedia>
                    <img src={this.props.image} alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle={`$${this.props.price}`} />
                <CardText>
                    {this.props.description}
                </CardText>
                {this.state.displayActions &&
                    <CardActions style={styles.actions}>
                        <IconButton tooltip="+ List" tooltipPosition="top-center"><AddList color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
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

}
