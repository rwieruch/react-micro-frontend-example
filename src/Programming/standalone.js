import React from 'react';
import ReactDOM from 'react-dom';

import Programming from '.';

const ProgrammingStandalone = () => {
  const props = {};

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Programming isStandalone {...props} />;
};

ReactDOM.render(
  <ProgrammingStandalone />,
  document.getElementById('app')
);

module.hot.accept();
