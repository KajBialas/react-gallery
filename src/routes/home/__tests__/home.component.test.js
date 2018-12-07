import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../home.component';

describe('HomeComponent', () => {
  const defaultProps = {
    photosRecords: [],
    photosLoading: false,
    photosError: false,
    photosRequest: jest.fn(),
  };
  it('should shallows correctly', () => {
    const component = shallow(<HomeComponent {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });
});