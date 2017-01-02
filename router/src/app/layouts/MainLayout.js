import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

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

class MainLayout extends Component {

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
    );
  }
}

export default MainLayout;
