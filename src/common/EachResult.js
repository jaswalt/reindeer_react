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

export default class EachResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTextCollapsed: true,
            displayActions: false,
            cardText: this.props.description,
            price: this.props.price,
            photo: this.props.image
        };
    }

    componentDidMount() {
        this.setState({
            displayedCardText: this.state.cardText.substring(0, 140),
        });
    }

    render() {
        return (
            <Card className="gift-card" style={styles.container} onMouseEnter={this._showActionButtons} onMouseLeave={this._collapseCardText}>
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
                    <img src={this.state.photo} alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle={`$${this.state.price}`} />
                <CardText>
                    {this.state.displayedCardText}
                    {this.state.cardTextCollapsed && <p><ExpandMore onClick={this._expandCardText} /></p>}
                </CardText>
                {this.state.displayActions &&
                    <CardActions style={styles.actions}>
                        <IconButton tooltip="+ List" tooltipPosition="top-center"><AddList color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
                    </CardActions>
                }
            </Card>
        );
    }

    _expandCardText = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            displayedCardText: this.state.cardText,
            cardTextCollapsed: false,
        });
    };

    _showActionButtons = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            displayActions: true,
        });
    };

    _collapseCardText = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            displayedCardText: this.state.cardText.substring(0, 140),
            cardTextCollapsed: true,
            displayActions: false,
        })
    }
}
