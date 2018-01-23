import React from 'react';

import App from './';

describe('App', () => {
  const component = shallow(<App title={'Foo Bar'} />);

  it('renders the component with the correct element', () => {
    expect(component.type()).to.eql('div');
  });

  it('has the title in props', () => {
    expect(component.contains('Foo Bar')).to.equal(true);
  });

  it('has all class names', () => {
    expect(component.find('.app-header')).to.have.length(1);
  });
});
