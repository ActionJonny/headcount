import React from 'react'
import { shallow, mount } from 'enzyme';
import Card from './Card'
import App from '../App/App'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Card', () =>  {

  it('Card is an input field', () => {
  const wrapper = mount(<App />);
  const card = wrapper.find('distCard').key('Colorado')
  console.log(card);
  });

});
