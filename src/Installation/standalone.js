import React from 'react';
import ReactDOM from 'react-dom';

import Installation from '.';

const InstallationStandalone = () => {
  const props = {};

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Installation isStandalone {...props} />;
};

ReactDOM.render(
  <InstallationStandalone />,
  document.getElementById('app')
);

module.hot.accept();
