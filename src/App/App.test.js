import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('testing app', () => {
  test('should render an h1, controls, and grid', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('Controls').length).toBe(1);
    expect(wrapper.find('Grid').length).toBe(1);
  });
});
