import React from 'react';
import './Footer.css';
import logo from '../../images/logo.svg';
import location from '../../images/location-filled.svg';
import phone from '../../images/phone.svg';
import mail from '../../images/mail.svg';


const Footer = () => {
  return (
    <div className='footer' id='footer'>


        <div className="address">
        <div className='logo'>
            <img src={logo} alt="" />
            <p>Pet Care</p>
        </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />quas voluptas itaque molestias animi nesciunt, <br /> quis, eum consequatur maiores fugiat tempora est nam distinctio.</p>
                 <ul>
                   <li><img src={location}  alt='1'/> Coimbatore</li>
                  <li><img src={phone} alt="1" /> (+91) 6382328740</li> 
                   <li><img src={mail} alt="1" /> subaganesh126@gmail.com</li>
                 </ul>
        </div>


        <div className="menu">
            <ul> <h2>Menu</h2>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
           <li><a href="#services">Services</a></li> 
           <li><a href="#contact">Contact</a></li> 
            </ul>

        </div>


        <div className="footer-services">
        <ul><h2>Services</h2>
            <li><a href="#aboutus">Veterinary</a></li>
            <li><a href="#aboutus">Dog Daycare</a></li>
           <li><a href="#aboutus">Hostel for Dogs</a></li> 
           <li><a href="#aboutus">Behaviourist</a></li> 
           <li><a href="#aboutus">Grooming</a></li> 
           <li><a href="#aboutus">Pet Sitting</a></li> 
            </ul>

        </div>


        <div className="socialmedia">
        <ul><h2>Social Media</h2>
            <li><a href="https://www.facebook.com/login.php/">Facebook</a></li>
            <li><a href="https://www.instagram.com/accounts/login/">Instagram</a></li>
           <li><a href="https://www.tiktok.com/about">Tiktok</a></li> 
           <li><a href="https://www.youtube.com/">Youtube</a></li> 
           <li><a href="https://www.linkedin.com/feed/">Linkedin</a></li> 
            </ul>
    </div>


    
    </div>
  )
}

export default Footer