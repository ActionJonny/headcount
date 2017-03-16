import React, { Component } from 'react';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      district: []
    }
  }

  componentDidMount() {
    this.dataHelper(kinderData)
  }

  roundNumber(num, decimals) {
    if(isNaN(num)) {
      return 0
    } else {
      return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals)
    }
  }

  dataHelper(data) {
    let newData = data.reduce((mainObj, curr) => {
      if(!mainObj[curr.Location.toLowerCase()]) {
        let dataProfile = {
          location: curr.Location,
          data: { [curr.TimeFrame]: this.roundNumber(curr.Data, 3) }
        }
        mainObj[curr.Location.toLowerCase()] = dataProfile;
      } else {
        mainObj[curr.Location.toLowerCase()].data[curr.TimeFrame] = this.roundNumber(curr.Data, 3);
      }
      return mainObj
    }, {});
    this.setState({district: newData})
  }

  loadCards() {
    return this.state.district
  }

  render() {
    return (
      <div>{this.loadCards()}</div>
    );
  }
}


export default Grid;
