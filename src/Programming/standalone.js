import React from 'react';
import ReactDOM from 'react-dom';

import Programming from './';

const ProgrammingStandalone = () => {
  const props = {};

  return <Programming isStandalone={true} {...props} />;
};

ReactDOM.render(
  <ProgrammingStandalone />,
  document.getElementById('app')
);

module.hot.accept();
