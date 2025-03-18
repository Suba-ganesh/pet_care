import React from 'react'
import Box from '../utilities/Box';
import './services.css';
import service_dog from '../../images/service_dog.png';

const Services = () => {
  return (
    <div className='dog-services' id='services'>
       
        <div className="services-left">

       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
        </div>
        <div className="services-center">
        <h1>OUR SERVICES</h1>
       
         <img src={service_dog} alt="" /> 
      
        </div>
        <div className="services-right">
        <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
       <Box name="Veterinarian" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nihil praesentium eos debitis nam neque expedita quis, cupiditate laudantium voluptatibus voluptates! "></Box>
        </div>
    </div>
  )
}

export default Services