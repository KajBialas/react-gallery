import React from 'react';
import { shallow } from 'enzyme';
import MenuComponent from '../menu.component';

describe('MenuComponent', () => {
  it('should shallows correctly', () => {
    const component = shallow(<MenuComponent />);

    expect(component).toMatchSnapshot();
  });
});