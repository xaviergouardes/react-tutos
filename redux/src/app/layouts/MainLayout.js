import React, {Component} from 'react';
import { Link } from 'react-router'
import { browserHistory } from 'react-router';


// My Components
import Home from '../components/Home';
import {styleHeader, styleAside, styleMain} from './stylesMainLayout';
import DrawerApp from './DrawerApp';
import AppBarApp from './AppBarApp';

class MainLayout extends Component {

/*
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  };
  */

  handleToggle = () => this.setState({open: !this.state.open});

/*
  handleClick = (event, menuItem, index) => {
      this.handleToggle();
      browserHistory.push(menuItem.props.path);
  };
*/

  render() {
    return (
      <div>

        <AppBarApp />

        <DrawerApp />

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
