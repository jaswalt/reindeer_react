import React from 'react';
import { connect } from 'react-redux';

const styles = {
    container: {
    },
    content: {
        fontFamily: 'Great Vibes',
        fontSize: '4em',
        textAlign: 'center',
        paddingTop: 200,
        paddingLeft: 250,
        paddingRight: 250,
    },
};

class Main extends React.Component {
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
            <section style={this.state.theme.container}>
                <div style={styles.content}>
                    <p>Find out what your loved one wants this year!</p>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.users.activeTheme,
});

export default connect(mapStateToProps)(Main);
