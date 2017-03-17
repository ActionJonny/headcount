import React from 'react'
import { shallow, mount } from 'enzyme';
import Grid from './Grid'
import App from '../App/App'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Grid', () =>  {

  it('Should have a grid', () => {
    const wrapper = mount(<App />);
  });
});
