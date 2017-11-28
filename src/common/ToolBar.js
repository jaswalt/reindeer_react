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

const styles = {
  container: {
      backgroundColor: 'blue',
  },
};

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
      <Toolbar style={styles}>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Sort By" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Price" />
            <MenuItem primaryText="Category" />
            <MenuItem primaryText="Date Added" />
            <MenuItem primaryText="Location Added" />
            <MenuItem primaryText="Rank" />
          </IconMenu>
        </ToolbarGroup>

        <ToolbarGroup >
          <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{paddingLeft: '5em', paddingRight: '5em'}}>
            <MenuItem value={1} primaryText="Theme" />
            <MenuItem value={2} primaryText="Birthday" />
            <MenuItem value={3} primaryText="Christmas" />
            <MenuItem value={4} primaryText="Chanukah" />
            <MenuItem value={5} primaryText="Kwanzaa" />
            <MenuItem value={6} primaryText="Diwali" />
            <MenuItem value={7} primaryText="Lunar New Year" />
            <MenuItem value={8} primaryText="Mother's & Father's Day" />
            <MenuItem value={9} primaryText="Graduation" />
            <MenuItem value={10} primaryText="Baby Shower" />
            <MenuItem value={11} primaryText="Bridal Shower" />
            <MenuItem value={12} primaryText="Wedding" />
            <MenuItem value={13} primaryText="Bar & Bat Mitzvah" />
          </DropDownMenu>
        </ToolbarGroup>

        <Search lastChild={true} />
      </Toolbar>
    );
  }
}
