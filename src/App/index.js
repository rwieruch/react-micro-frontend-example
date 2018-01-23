import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import Dashboard from '../Dashboard';
import Programming from '../Programming';
import Installation from '../Installation';

import './style.less';
import logo from '../../assets/react.png';

const App = ({ title }) =>
  <div className="app">
    <div className="app-header">
      <h1>{title}</h1>
      <img className="app-header-image" src={logo} alt="logo"/>
    </div>

    <Router>
      <div>
        <Route
          exact path={routes.DASHBOARD}
          component={() => <Dashboard />}
        />
        <Route
          exact path={routes.PROGRAMMING}
          component={() => <Programming />}
        />
        <Route
          exact path={routes.INSTALLATION}
          component={() => <Installation />}
        />
      </div>
    </Router>
  </div>

export default App;