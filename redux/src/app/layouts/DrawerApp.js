import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';

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
    this.handleClickItem = this.handleClickItem.bind(this);
  };

  handleClickItem = (event) => {
      store.dispatch(toogleDrawerAction(this.props.open));
  };

  render() {
    return (

      <Drawer open={this.props.open} openSecondary={true} onRequestChange={this.handleClickItem}>

            <MenuItem
              containerElement={<Link to="/"/>}
              onTouchTap={this.handleClickItem} >
                Home
            </MenuItem>

            <MenuItem
              containerElement={<Link to="list"/>}
              onTouchTap={this.handleClickItem} >
                Causes List
            </MenuItem>

            <MenuItem
              containerElement={<Link to="cause" />}
              onTouchTap={this.handleClickItem} >
                Causes Détail
            </MenuItem>

      </Drawer>

    );
  }

}

function mapStateToProps(store) {
  //console.debug('DrawerApp.mapStateToProps() : ' + store.drawerState.open );
  return { open: store.drawerState.open }
}

export default connect(mapStateToProps, toogleDrawerAction)(DrawerApp);
