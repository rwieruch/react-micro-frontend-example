import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import Dashboard, { doIncrement, doDecrement } from './';

describe('Business Logic', () => {
  it('should increment the counter in state', () => {
    const state = { counter: 0 };
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });

  it('should decrement the counter in state', () => {
    const state = { counter: 0 };
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  });
});

describe('Dashboard', () => {
  it('calls render', () => {
    spy(Dashboard.prototype, 'render');

    const component = mount(<Router><Dashboard /></Router>);
    expect(Dashboard.prototype.render.calledOnce).to.equal(true);
  });

  it('increments the counter', () => {
    const component = shallow(<Router><Dashboard /></Router>).find(Dashboard).dive();

    component.setState({ counter: 0 });
    component.find('button').at(0).simulate('click');

    expect(component.state().counter).to.equal(1);
  });

  it('decrements the counter', () => {
    const component = shallow(<Router><Dashboard /></Router>).find(Dashboard).dive();

    component.setState({ counter: 0 });
    component.find('button').at(1).simulate('click');

    expect(component.state().counter).to.equal(-1);
  });
});

