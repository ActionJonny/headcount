import React, { Component } from 'react';
import './Card.css';


class Card extends Component {

  render() {
    const { stats } = this.props;
    const cardData = Object.keys(stats).map((year, index) => {
      return (
        <li key={index}>{year}: {stats[year]}</li>
      )
    })
    return (
      <section className="distCard">
        <h4 className="districtName">{this.props.district}</h4>
        <ul>{ cardData }</ul>
      </section>
    )
  }
}

export default Card;
