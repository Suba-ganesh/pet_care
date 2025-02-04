import React from 'react';
import './Photo.css';

const Photo = (props) => {
  return (
    <div className='photobox'>
    <div className='photo'>
        <img src={props.img} alt="" />
    </div>
    <h2>{props.name}</h2>
    <p>{props.role}</p>
    </div>
    
  )
}

export default Photo