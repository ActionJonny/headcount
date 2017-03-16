import React, { Component } from 'react';
// import DistrictRepository from '../helper';
// import App from '../App/App';

class Grid extends Component {
  loadCards(props) {
    console.log(this.props.district);
    // return this.props.district
  }
  
  render() {
    return (
      <div>{this.loadCards()}</div>
      
    );
  }
}


export default Grid;
