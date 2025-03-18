import React from 'react';
import './Main.css';
import dog from '../../images/dog.png';
import Button from '../utilities/Utilities';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Main = () => {
  return (
    <div className='main' id='home'>
  
     <div className='ad'>
           <div className="ad-left">
            <h2>We will Take Care of Your Family Member Professionally</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia dolor quaerat, laborum culpa beatae amet tenetur consectetur quos, obcaecati, doloremque nisi voluptate quia ducimus sed cumque recusandae commodi reprehenderit?</p>
            <div className='but'>
              <Button name="OFFER"></Button>
              <Button name="Read More"></Button>
            </div>
           </div>
         

           <div className="ad-right">
            <img src={dog} alt="" />
           </div>

           <div className="services">
           <Button name="Vetenary"></Button>
           <Button name="Hostels"></Button>
           <Button name="Grooming"></Button>
           <Button name="Dog Daycare"></Button>
           <Button name="Pet Sitting"></Button>
           </div>
     </div>

    </div>
  )
}

export default Main;