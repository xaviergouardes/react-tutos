import React, {Component} from 'react';

//material-ui
import AppBar from 'material-ui/AppBar';

// redux
import { connect } from 'react-redux';
import store from '../store.js';
import {toogleDrawerAction} from '../actions/drawer-actions.js';

class AppBarApp extends Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  };

  //handleToggle = () => this.setState({open: !this.state.open});
  handleToggle = () => {

    console.debug('toogleDrawerAction(true) = ' + toogleDrawerAction('true').toogle );

    store.dispatch(toogleDrawerAction('true'));
    console.debug('AppBar.handleToggle()');
  }


  render() {
    return (

      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
       />
    );
  }

}

const mapStateToProps = function(store) {
  return {
    open: store.drawerState.toogle,
  };
};

export default connect(mapStateToProps)(AppBarApp);
