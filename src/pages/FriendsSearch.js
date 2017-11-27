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

function FriendsSearchPage(props) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Username</TableHeaderColumn>
                        <TableHeaderColumn>First Name</TableHeaderColumn>
                        <TableHeaderColumn>Befriend</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.users.map((user, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{user.username}</TableRowColumn>
                            <TableRowColumn>{user.first_name}</TableRowColumn>
                            <TableRowColumn>Click</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.users.usersSearch,
});

export default connect(mapStateToProps)(FriendsSearchPage);
