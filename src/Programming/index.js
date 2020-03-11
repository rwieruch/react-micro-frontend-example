import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Programming = ({ isStandalone }) => (
  <div>
    <h1>Programming</h1>

    {!isStandalone && (
      <Link to={routes.DASHBOARD}>Back to Dashboard</Link>
    )}
  </div>
);

export default Programming;
