import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Programming = ({ isStandalone }) =>
  <div>
    {!isStandalone && <Link to={routes.DASHBOARD}>Back to Dashboard</Link>}
    <h1>Programming</h1>
  </div>

export default Programming;