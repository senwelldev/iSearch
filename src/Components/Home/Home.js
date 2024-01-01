import React from 'react';
import './Home.css';
import Scrollspy from './Scrollspy';
import Video from './Video';
import Onboarding from './Onboarding';
import HelpYouWin from './LetsFind';
import Service from './Service';
import ServiceBands from './ServiceBands';
import Counts from './Counts';


const Home = () => {
  
  return (
    <>
      <Video/>
      <Scrollspy/>
      <Onboarding/>
      <Counts/>
      <Service/>
      <ServiceBands/>
      <HelpYouWin/>
    </>
  );
};

export default Home;
