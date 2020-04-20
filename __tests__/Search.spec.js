import React from 'react';
import Search from '../src/containers/Search'
import { create } from 'react-test-renderer';

describe('Check search component', () => {

  it('renders search correctly', () => {
    const component = create(<Search />).toJSON();
    expect(component).toMatchSnapshot();
  });

})