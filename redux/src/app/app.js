import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import CauseDetails from './components/CauseDetails';
import ListCauses from './components/ListCauses';
import Home from './components/Home';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainRouter = () => (
  <Provider store={store}>

    <MuiThemeProvider>
      <Router history={browserHistory}>

        <Route path="/" component={MainLayout}>
          <Route path="list" component={ListCauses} />
          <Route path="cause" component={CauseDetails} />
        </Route>

      </Router>
    </MuiThemeProvider>

  </Provider>

);

//render(<App />, document.getElementById('app'));
render(<MainRouter />, document.getElementById('app'));
