import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>

      <ul>
        <li>
          <Link to={routes.PROGRAMMING}>Programming</Link>
        </li>
        <li>
          <Link to={routes.INSTALLATION}>Installation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
