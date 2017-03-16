import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js';
import Grid from '../Grid/Grid.js';
// import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: []
    }
  }
  
  componentDidMount() {
    this.dataHelper(kinderData);
  }
  
  render() {
    return (
      <div>
        <Controls />
        <Grid district={this.state.district}/>
      </div>
    );
  }
}

export default App;
