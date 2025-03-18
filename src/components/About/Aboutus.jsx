import React from 'react'
import Photo from '../utilities/Photo';
import allwin from '../../images/allwin.png';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus' id='aboutus'>
        <div className="aboutus-title">
            <h1>Know Our Team</h1>
        </div>
        <div className="aboutus-menu">
            <Photo img ={allwin} name="Alwin" role="Vetenarian"></Photo>
            <Photo img ={allwin} name="Sudhish" role="Animal Specialist"></Photo>
            <Photo img ={allwin} name="Subaganesh" role="Animal Pychio"></Photo>
            <Photo img ={allwin} name="Surya" role="Pet CareTaker"></Photo>
            <Photo img ={allwin} name="John" role="Groomer"></Photo>
        </div>
    </div>
  )
}

export default Aboutus