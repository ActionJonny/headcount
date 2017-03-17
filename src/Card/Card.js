import React, { Component } from 'react';
import './Card.css';
import classNames from 'classnames';


class Card extends Component {

  render() {
    const { stats } = this.props;
    const cardData = Object.keys(stats).map((year, index) => {
      const quality = classNames ({
        'bad': stats[year] <= 0.49,
        'good': stats[year] >= 0.5
      })
      return (
        <li key={index} className={quality}>{year}: {stats[year]}</li>
      )
    });
    
    return (
      <div className="distCard">
        <h4 className="districtName">{this.props.district}</h4>
        <ul>{ cardData }</ul>
      </div>
    );
  }
}

export default Card;
