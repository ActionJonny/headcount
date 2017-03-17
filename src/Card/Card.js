import React, { Component } from 'react';

class Card extends Component {

  render() {
    const { stats } = this.props;
    const cardData = Object.keys(stats).map((year, index) => {
      return (
        <li key={index}>{year}: {stats[year]}</li>
      )
    })
    return (
      <div className="distCard">
        <h4 className="districtName">{this.props.district}</h4>
        <ul>{ cardData }</ul>
      </div>
    )
  }
}

export default Card;
