import React from 'react';
import './Controls.css';

const Controls = ({searchMatch}) => {
  return (
    <section>
      <input
        onChange={(e) => searchMatch(e.target.value)}
        placeholder='School District'
        type='text'/>
    </section>
  );
}

export default Controls;
