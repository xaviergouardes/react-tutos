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
    this.state = {flag: true};
  };

  //handleToggle = () => this.setState({open: !this.state.open});
  handleToggle = () => {

    console.debug('AppBar.handleToggle() => ' + this.state.flag);
    this.setState({flag: !this.state.flag});
    store.dispatch(toogleDrawerAction(this.state.flag));

    //console.debug('toogleDrawerAction(true) = ');
    //console.debug({...toogleDrawerAction(this.state.flag)});
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

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#api
// Inject just dispatch and don't listen to store
export default connect()(AppBarApp);

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#api
// Inject all action creators (addTodo, completeTodo, ...) without subscribing to the store
//export default connect(null, toogleDrawerAction)(TodoApp)
