import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    container: {
        width: 250,
        color: '#000',
        textAlign: 'justify',
        margin: 10,
    },
};

export default class GiftCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTextCollapsed: true,
            cardText: 'Ut cupidatat culpa ut Lorem labore sint velit laboris consequat nulla do quis dolore. Commodo incididunt incididunt dolor deserunt mollit exercitation Lorem nostrud anim. Excepteur enim tempor velit minim anim ipsum qui officia reprehenderit. Duis in do fugiat ut sit eu qui officia eiusmod non ea. Reprehenderit incididunt ut consectetur id nulla dolor elit elit enim est id ut amet.',
        };
    }

    componentWillMount() {
        this.setState({
            displayedCardText: this.state.cardText.substring(0, 140),
        });
    }

    render() {
        return (
            <Card className="gift-card" style={styles.container} onMouseLeave={this._collapseCardText}>
                <CardHeader
                    title="Fluffy Stuffed Cat"
                    subtitle="Pet"
                />
                <CardMedia>
                    <img src="http://4.bp.blogspot.com/-pGUXC8ugtWk/USqy_ppFbCI/AAAAAAAAD6Y/yRSgg40BXlw/s1600/cat+pictures.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    {this.state.displayedCardText}
                    {this.state.cardTextCollapsed && <p><a href="#" onClick={this._expandCardText}>Read more</a></p>}
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        );
    }

    _expandCardText = (e) => {
        e.preventDefault();

        this.setState({
            displayedCardText: this.state.cardText,
            cardTextCollapsed: false,
        });
    }

    _collapseCardText = (e) => {
        e.preventDefault();

        this.setState({
            displayedCardText: this.state.cardText.substring(0, 140),
            cardTextCollapsed: true,
        })
    }
}
