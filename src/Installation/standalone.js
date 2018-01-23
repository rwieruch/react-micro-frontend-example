import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Installation from './';

class InstallationStandalone extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // fetch data and put in state
  }

  render() {
    return <Installation isStandalone={true} { ...this.state } />;
  }
}

ReactDOM.render(
  <InstallationStandalone />,
  document.getElementById('app')
);

module.hot.accept();