import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../home.component';

describe('HomeComponent', () => {
  it('should shallows correctly', () => {
    const component = shallow(<HomeComponent />);

    expect(component).toMatchSnapshot();
  });
});