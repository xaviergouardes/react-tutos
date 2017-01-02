import React, {Component} from 'react';
import { Link } from 'react-router'
import { browserHistory } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

import Home from '../components/Home';

const styleHeader = {
  border: 'red solid 1px',
  background: 'red',
  color: 'white',
};

const styleAside = {
  border: 'green solid 1px',
  background: 'green',
  color: 'white',
};

const styleMain = {
  border: 'blue solid 1px',
  background: 'blue',
  color: 'white',
};

class MainLayout extends Component {

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
      <div>

        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
         >

          <Drawer open={this.state.open}>
              <Menu onItemTouchTap={this.handleClick}>
                <MenuItem path="/" >Home</MenuItem>
                <MenuItem path="list">Causes List</MenuItem>
                <MenuItem path="cause">Causes Détail</MenuItem>
              </Menu>
          </Drawer>

        </AppBar>

        <main style={styleMain}>
          {this.props.children || <Home/>}
        </main>

      </div>
    );
  }
}

export default MainLayout;

/* => Ne fonctionne pas
const MainLayout = () => (
  <div>

    <header style={styleHeader}><h1>header</h1></header>

    <aside style={styleAside} >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Causes List</Link></li>
        <li><Link to="/cause">Detail Cause</Link></li>
      </ul>
    </aside>

    <main style={styleMain}>
      {this.props.children || <Home/>}
    </main>

  </div>
);

export default MainLayout;
*/

/*
// Fonctionne bien
export default React.createClass({
  render() {
    return (

      <div>

        <header style={styleHeader}><h1>header</h1></header>

        <aside style={styleAside} >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Causes List</Link></li>
            <li><Link to="/cause">Detail Cause</Link></li>
          </ul>
        </aside>

        <main style={styleMain}>
          {this.props.children || <Home/>}
        </main>

      </div>
    )
  }
})
*/
