import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  render() {
    return (
      <article>
        <input placeholder='School District' type='text'/>
        <input type='submit'/>
      </article>
    );
  }
}

export default Controls;
