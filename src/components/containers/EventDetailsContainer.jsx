import React from 'react'; 
import ReturnBtn from '../views/ReturnBtn'; 
import EventDetails from './EventDetails'; 

// this component contains the other components in the page

const EventDetailsContainer = () => {
  return (
    <>
      <ReturnBtn />
      <EventDetails />
    </>
  )
}; 

export default EventDetailsContainer; 
