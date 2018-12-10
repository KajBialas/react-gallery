import React from 'react';
import { shallow } from 'enzyme';
import ContactComponent from '../contact.component';

describe('ContactComponent', () => {
  it('should shallows correctly', () => {
    const component = shallow(<ContactComponent />);

    expect(component).toMatchSnapshot();
  });
});