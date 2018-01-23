import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

import './style.less';

export const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

export const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <ul>
          <li><Link to={routes.PROGRAMMING}>Programming</Link></li>
          <li><Link to={routes.INSTALLATION}>Installation</Link></li>
        </ul>

        <div className="dashboard-content">
          <p>{counter}</p>

          <button type="button" onClick={this.onIncrement}>Increment</button>
          <button type="button" onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;