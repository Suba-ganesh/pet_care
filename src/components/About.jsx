import React from 'react';
import './About.css';
import aboutdog from '../images/about.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <hr />
        <div className='about-left'>
        <h2>About</h2>
        <h3>What will Your Good One Happy</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quos delectus architecto amet maxime, quia quisquam eveniet repellendus saepe minima facilis est ducimus non iusto deleniti nam dolorem enim?</p>
        </div>
        <div className="about-right">
          <img src={aboutdog} alt="" />
        </div>
    </div>

    
  )
}

export default About