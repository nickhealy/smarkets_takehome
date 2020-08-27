import React from 'react';
import { useSelector } from 'react-redux';  
import MatchName from '../views/MatchName.jsx'; 
import EventTime from '../views/EventTime.jsx'; 


const EventDetails = () => {
  const eventDetails = useSelector(state => state.events.eventInFocus); 
  return (
    <div className='event-details-container'>
      <MatchName name={eventDetails.name} />
      <EventTime start_date={eventDetails.start_date} start_datetime={eventDetails.start_datetime} />
    </div>
  )
}

export default EventDetails; 