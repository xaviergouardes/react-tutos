import React, {Component} from 'react';

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
    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle = () => this.setState({open: !this.props.open});

  render() {
    return (

      <Drawer open={this.props.open} openSecondary={true}>
          <Menu>
            <MenuItem path="/" >Home</MenuItem>
            <MenuItem path="list">Causes List</MenuItem>
            <MenuItem path="cause">Causes Détail</MenuItem>
          </Menu>
      </Drawer>
    );
  }

}

// const mapStateToProps = function(store) {
//  console.debug('DrawerApp.mapStateToProps() : ' + store.drawerState );
//  return {
//    open: store.drawerState.toogle,
//  };
//};

// export default connect(mapStateToProps)(DrawerApp);

function mapStateToProps(store) {
  console.debug('DrawerApp.mapStateToProps() : ' + store.drawerState.open );
  return { open: store.drawerState.open }
}

export default connect(mapStateToProps)(DrawerApp);
