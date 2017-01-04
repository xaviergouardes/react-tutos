import React, {Component} from 'react';
import { browserHistory } from 'react-router';

//material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

// redux
import { connect } from 'react-redux';
import store from '../store.js';
import { toogleDrawerAction } from '../actions/drawer-actions';

class DrawerApp extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (event, menuItem, index) => {
      store.dispatch(toogleDrawerAction(this.props.open));
      browserHistory.push(menuItem.props.path);
  };

  render() {
    return (

      <Drawer open={this.props.open} openSecondary={true}>
          <Menu onItemTouchTap={this.handleClick}>
            <MenuItem path="/" >Home</MenuItem>
            <MenuItem path="list">Causes List</MenuItem>
            <MenuItem path="cause">Causes Détail</MenuItem>
          </Menu>
      </Drawer>

    );
  }

}

function mapStateToProps(store) {
  //console.debug('DrawerApp.mapStateToProps() : ' + store.drawerState.open );
  return { open: store.drawerState.open }
}

export default connect(mapStateToProps, toogleDrawerAction)(DrawerApp);
