import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import Programming from '../Programming';
import Installation from '../Installation';

// eslint-disable-next-line react/prop-types
const App = ({ title }) => (
  <Router>
    <h1>{title}</h1>

    <ul>
      <li>
        <Link to={routes.PROGRAMMING}>Programming</Link>
      </li>
      <li>
        <Link to={routes.INSTALLATION}>Installation</Link>
      </li>
    </ul>

    <Routes>
      <Route path={routes.PROGRAMMING} element={<Programming />} />
      <Route path={routes.INSTALLATION} element={<Installation />} />
    </Routes>
  </Router>
);

export default App;
