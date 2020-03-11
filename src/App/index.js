import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import Dashboard from '../Dashboard';
import Programming from '../Programming';
import Installation from '../Installation';

// eslint-disable-next-line react/prop-types
const App = ({ title }) => (
  <div>
    <h1>{title}</h1>

    <Router>
      <Routes>
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
        <Route path={routes.PROGRAMMING} element={<Programming />} />
        <Route
          path={routes.INSTALLATION}
          element={<Installation />}
        />
      </Routes>
    </Router>
  </div>
);

export default App;
