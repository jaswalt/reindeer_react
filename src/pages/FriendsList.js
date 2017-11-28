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
import { loadFriends } from '../store/actions/userActions';

const styles = {
    chip: {
        margin: 4,
    },
};

class FriendsList extends Component {
    componentDidMount() {
        this.props.dispatch(loadFriends());
    }

    render() {
        return (
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
                        {this.props.friends.map(user => (
                            <TableRow key={user.id} userId={user.id} selectable={false}>
                                <TableRowColumn>{user.username}</TableRowColumn>
                                <TableRowColumn>{user.first_name}</TableRowColumn>
                                <TableRowColumn>
                                    <Chip
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
        );
    }
}


const mapStateToProps = state => ({
    friends: state.users.profile ? state.users.friends : null,
});

export default connect(mapStateToProps)(FriendsList);
