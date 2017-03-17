import React from 'react';
import './Controls.css';

const Controls = ({searchMatch}) => {
  return (
    <article>
      <input
        onChange={(e) => searchMatch(e.target.value)}
        placeholder='School District'
        type='text'/>
    </article>
  );
}

export default Controls;
