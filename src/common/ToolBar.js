import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Search from './Search';

export default class ToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({
    value,
  });

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Sort By" />
            <MenuItem value={2} primaryText="Price" />
            <MenuItem value={3} primaryText="Category" />
            <MenuItem value={4} primaryText="Date Added" />
            <MenuItem value={5} primaryText="Location Added" />
            <MenuItem value={6} primaryText="Rank" />
          </DropDownMenu>
        </ToolbarGroup>

        <Search lastChild={true}/>
      </Toolbar>
    );
  }
}
