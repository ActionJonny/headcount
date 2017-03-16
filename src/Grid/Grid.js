import React, { Component } from 'react';
import DistrictRepository from '../helper';
import App from '../App/App';
import Card from '../Card/Card';

class Grid extends Component {
  
  render() {
    const cardList = this.props.search.map((district, index) => {
      console.log(district.location)
      return (
        <Card key={index} district={district.location} stats={district.data} />
      )
    })
    // console.log(this.props.search);
    return (
      <div className="cardGrid">{ cardList }</div>
    )
  }
  
//   loadCards(props) {
//     const cardData = this.props.search.map((district, index) => {
//       let districtKeys = Object.keys(district);
//       console.log(districtKeys);
//       <Card {...districtKeys} key={index}/>
//     });
//   }
// }
//   
//   return (
//     <div>{ cardData }</div>
//   );
}


export default Grid;
