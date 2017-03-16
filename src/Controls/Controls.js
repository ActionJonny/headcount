import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }


  render() {
    return (
      <article>
        <input 
          value={this.state.text}
          onChange={(e) => 
            this.setState({
              text: e.target.value
            })
          } 
          placeholder='School District' 
          type='text'
        />
      <button onClick={()=> alert(this.state.text)}>Search</button>
      </article>
    );
  }
}

export default Controls;
