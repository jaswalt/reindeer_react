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
      value: "Theme",
    };
  }

  handleChange = (event, index, value) => this.setState({
    value,
  });

  render() {
    return (
      <Toolbar style={styles}>
        {/* <ToolbarGroup firstChild={true}>
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
        </ToolbarGroup> */}

        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{paddingLeft: '5em', paddingRight: '5em'}}>
            <MenuItem value="Theme" primaryText="Theme" />
            <MenuItem value="Birthday" primaryText="Birthday" />
            <MenuItem value="Christmas" primaryText="Christmas" />
            <MenuItem value="Chanukah" primaryText="Chanukah" />
            <MenuItem value="Kwanzaa" primaryText="Kwanzaa" />
            <MenuItem value="Diwali" primaryText="Diwali" />
            <MenuItem value="LunarNewYear" primaryText="Lunar New Year" />
            <MenuItem value="MothersDay" primaryText="Mother's Day" />
            <MenuItem value="FathersDay" primaryText="Father's Day" />
            <MenuItem value="Graduation" primaryText="Graduation" />
            <MenuItem value="BabyShower" primaryText="Baby Shower" />
            <MenuItem value="BridalShower" primaryText="Bridal Shower" />
            <MenuItem value="Wedding" primaryText="Wedding" />
            <MenuItem value="BarMitzvah" primaryText="Bar Mitzvah" />
            <MenuItem value="BatMitzvah" primaryText="Bat Mitzvah" />
          </DropDownMenu>
        </ToolbarGroup>

        <Search lastChild={true} />
      </Toolbar>
    );
  }
}
