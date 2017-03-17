import React, { Component } from 'react';
import Card from '../Card/Card';
import './Grid.css';

class Grid extends Component {
  render() {
    const cardList = this.props.search.map((district, index) => {
      return (
        <Card key={index} district={district.location} stats={district.data} />
      )
    })
    return (
      <div className="cardGrid">{ cardList }</div>
    )
  }
}


export default Grid;
