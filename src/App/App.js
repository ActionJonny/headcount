import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js';
import Grid from '../Grid/Grid.js';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: {},
      search: []
    }
  }
  
  componentWillMount() {
    this.setState({ district: new DistrictRepository(kinderData) })
  }
  
  componentDidMount() {
    this.setState({ search: this.state.district.findAllMatches() })
  }
  
  render() {
    return (
      <div>
        <Controls />
        <Grid search={this.state.search}/>
      </div>
    );
  }
}

export default App;
