import React from 'react'
import Photo from './utilities/Photo';
import allwin from '../images/allwin.png';
import sudhish from '../images/sudhish.png';
import subaganesh from '../images/subaganesh.png';
import surya from '../images/surya.png';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus' id='aboutus'>
        <div className="aboutus-title">
            <h1>Know Our Team</h1>
        </div>
        <div className="aboutus-menu">
            <Photo img ={allwin} name="ALWIN" role="Vetenarian"></Photo>
            <Photo img ={sudhish} name="Sudhish" role="Animal Specialist"></Photo>
            <Photo img ={subaganesh} name="Subaganesh" role="Animal Pychio"></Photo>
            <Photo img ={surya} name="Surya" role="Pet CareTaker"></Photo>
            <Photo img ={allwin} name="John" role="Groomer"></Photo>
        </div>
    </div>
  )
}

export default Aboutus