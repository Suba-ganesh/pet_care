import React from 'react';
import './Box.css';

const Box = (props) => {
  return (
    <div className='box'>
           <h2>{props.name}</h2>
           <p>{props.description}</p>
    </div>
  )
}

export default Box