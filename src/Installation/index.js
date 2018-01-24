import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Installation = ({ isStandalone }) =>
  <div>
    {!isStandalone && <Link to={routes.DASHBOARD}>Back to Dashboard</Link>}

    <h1>Installation</h1>
  </div>

export default Installation;