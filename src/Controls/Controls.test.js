import React from 'react'
import { shallow, mount } from 'enzyme';
import Controls from './Controls'
import App from '../App/App'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Controls', () =>  {

  it('Controls is an input field', () => {
  const wrapper = shallow(<Controls />);
  expect(wrapper.find('input').length).toEqual(1);
  });

  it('Controls has a simulate change', () => {
  const wrapper = mount(<App />)
  const search  = wrapper.find('input')
  const state = wrapper.state()
  search.simulate('change', {target: {value: 'Col'}})

  expect(wrapper.state().search.length).toBe(2)
  });

});
