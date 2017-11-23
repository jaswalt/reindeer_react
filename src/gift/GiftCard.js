import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Pets from 'material-ui/svg-icons/action/pets';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import AddList from 'material-ui/svg-icons/av/playlist-add';
import EditGift from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconButton from 'material-ui/IconButton';
import { red50 } from 'material-ui/styles/colors';

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

export default class GiftCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTextCollapsed: true,
            displayActions: false,
            cardText: this.props.fields.description,
        };
    }

    componentWillMount() {
        this.setState({
            displayedCardText: this.state.cardText.substring(0, 140),
        });
    }

    render() {
        return (
            <Card className="gift-card" style={styles.container} onMouseEnter={this._showActionButtons} onMouseLeave={this._collapseCardText}>
                <CardHeader
                    title={this.props.fields.name}
                    subtitle="Pet"
                    avatar={<Avatar
                        icon={<Pets />}
                        color={red50}
                        backgroundColor="#990033"
    
                    />}
                />
                <CardMedia>
                    <img src="http://4.bp.blogspot.com/-pGUXC8ugtWk/USqy_ppFbCI/AAAAAAAAD6Y/yRSgg40BXlw/s1600/cat+pictures.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle={`$${this.props.fields.price_cents}`} />
                <CardText>
                    {this.state.displayedCardText}
                    {this.state.cardTextCollapsed && <p><ExpandMore onClick={this._expandCardText} /></p>}
                </CardText>
                {this.state.displayActions &&
                    <CardActions style={styles.actions}>
                        <IconButton tooltip="Reserve" tooltipPosition="top-center"><Bookmark color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
                        <IconButton tooltip="+ List" tooltipPosition="top-center"><AddList color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
                        <IconButton tooltip="Edit" tooltipPosition="top-center"><EditGift color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
                        <IconButton tooltip="Delete" tooltipPosition="top-center" onClick={this.props.deleteMe}><DeleteForever color={styles.actionColor} hoverColor={styles.hoverActionColor} /></IconButton>
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
