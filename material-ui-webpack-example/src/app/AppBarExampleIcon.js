import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
     return (

        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          //onTouchTap={this.handleToggle}
          //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
         >

          <Drawer open={this.state.open} >

            <MenuItem onTouchTap={this.handleToggle}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Menu Item 2</MenuItem>

          </Drawer>

        </AppBar>

    );
  }
}
