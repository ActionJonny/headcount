import React from 'react'
import { shallow, mount } from 'enzyme';
import Card from './Card'
import App from '../App/App'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Card', () =>  {

  it('Card has a location', () => {
  const wrapper = mount(<App />);
  const card = wrapper.find('.districtName').first().prop('children')
  expect(card).toEqual('Colorado')
  });

  it('Card has a data', () => {
  const data = {
    2004: 0.24,
    2005: 0.278,
    2006: 0.337,
    2007: 0.395,
    2008: 0.536,
    2009: 0.598,
    2010: 0.64,
    2011: 0.672,
    2012: 0.695,
    2013: 0.703,
    2014: 0.741
  }
  const card = new Card(data: data)

  expect(card.props).toEqual(data)
  });

  it('each listed item should have a className of "bad"', () => {
    const wrapper = mount(<App />)
    const card = wrapper.find('.distCard').first()
    expect(card.find('.bad').length).toBe(4)
  })

  it('each listed item should have a className of "bad"', () => {
    const wrapper = mount(<App />)
    const card = wrapper.find('.distCard').first()
    expect(card.find('.good').length).toBe(7)
  })

});
