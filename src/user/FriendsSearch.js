import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { addFriendToUser } from '../store/actions/userActions';
import Snackbar from 'material-ui/Snackbar';


const styles = {
    chip: {
        margin: 4,
    },
};

class FriendsSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Table selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>Username</TableHeaderColumn>
                                <TableHeaderColumn>First Name</TableHeaderColumn>
                                <TableHeaderColumn>Befriend</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.props.users.map(user => (
                                <TableRow key={user.id} userId={user.id} selectable={false}>
                                    <TableRowColumn>{user.username}</TableRowColumn>
                                    <TableRowColumn>{user.first_name}</TableRowColumn>
                                    <TableRowColumn>
                                        <Chip
                                            onClick={(userId) => this.handleAddFriend(user.id)}
                                            style={styles.chip}
                                        >
                                            <Avatar color="#444" icon={<SvgIconFace />} />
                                            befriend
                                        </Chip>
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Snackbar
                    open={this.state.open}
                    message="Friend has been added!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }

    handleAddFriend = (userId) => {
        this.setState({
            open: true,
        })
        this.props.addFriend(userId);
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
}

const mapStateToProps = state => ({
    users: state.users.usersSearch,
    currentUser: state.users.profile ? state.users.profile.user_id : null,
});

const mapDispatchToProps = dispatch => ({
    addFriend: friendId => dispatch(addFriendToUser(friendId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsSearchPage);
