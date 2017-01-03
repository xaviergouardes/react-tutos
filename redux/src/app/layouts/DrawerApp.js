import React, {Component} from 'react';

//material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

// redux
import { connect } from 'react-redux';
import store from '../store.js';

class DrawerApp extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClick = (event, menuItem, index) => {
      this.handleToggle();
      browserHistory.push(menuItem.props.path);
  };

  render() {
    return (

      <Drawer open={this.state.open}>
          <Menu onItemTouchTap={this.handleClick}>
            <MenuItem path="/" >Home</MenuItem>
            <MenuItem path="list">Causes List</MenuItem>
            <MenuItem path="cause">Causes Détail</MenuItem>
          </Menu>
      </Drawer>
    );
  }

}

const mapStateToProps = function(store) {
  console.debug('DrawerApp.mapStateToProps()' + store.drawerState.toogle + ')');
  return {
    open: store.drawerState.toogle,
  };
};

export default connect(mapStateToProps)(DrawerApp);
