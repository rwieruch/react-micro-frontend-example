import React from 'react';
import ReactDOM from 'react-dom';

import Installation from './';

const InstallationStandalone = () => {
  const props = {};

  return <Installation isStandalone={true} {...props} />;
};

ReactDOM.render(
  <InstallationStandalone />,
  document.getElementById('app')
);

module.hot.accept();
