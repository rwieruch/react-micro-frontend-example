import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Installation = ({ isStandalone }) => (
  <div>
    <h1>Installation</h1>

    {!isStandalone && (
      <Link to={routes.DASHBOARD}>Back to Dashboard</Link>
    )}
  </div>
);

export default Installation;
