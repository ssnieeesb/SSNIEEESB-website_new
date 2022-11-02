import React from 'react';
import {Upcoming, Past} from '../../components/ieee_cs/events';
import Navigation from '../../components/ieee_cs/navbar';

const Events = () => {
    
  return (
    <>
    <Navigation></Navigation>
    <Upcoming></Upcoming>
    <Past></Past>
    </>
  );
};

export default Events;