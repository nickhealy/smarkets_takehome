import React from 'react';
import { useSelector } from 'react-redux';  
import MatchName from '../views/MatchName.jsx'; 
import EventTime from '../views/EventTime.jsx'; 
import BettableTag from '../views/BettableTag.jsx'; 
import LeagueInfo from '../views/LeagueInfo.jsx'; 


const EventDetails = () => {
  const eventDetails = useSelector(state => state.events.eventInFocus); 
  return (
    <div className='event-details-container'>
      <LeagueInfo eventSlug={eventDetails.full_slug} />
      <MatchName name={eventDetails.name} />
      <BettableTag bettable={eventDetails.bettable} />
      <hr/>
      <EventTime start_date={eventDetails.start_date} start_datetime={eventDetails.start_datetime} />
    </div>
  )
}

export default EventDetails; 