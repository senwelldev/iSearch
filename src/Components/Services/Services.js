import React from 'react';
import './Services.css';
import Greet from './Greet';
import Ourservices from './Ourservices';
import ServicesBanner from './ServicesBanner';
import IndustriesWeServe from './IndustriesWeServe';
import Greet2 from './Greet2';

const Services = () => {
  return (
    <div className='servicesBody'>
      <ServicesBanner/>
      <Greet/>
      <Ourservices/>
      <Greet2/>
      <IndustriesWeServe/>
    </div>
  )
}

export default Services
