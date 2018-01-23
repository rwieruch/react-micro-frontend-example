import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Programming from './';

class ProgrammingStandalone extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // fetch data and put in state
  }

  render() {
    return <Programming isStandalone={true} { ...this.state } />;
  }
}

ReactDOM.render(
  <ProgrammingStandalone />,
  document.getElementById('app')
);

module.hot.accept();