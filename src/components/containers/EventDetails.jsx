import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  
import MatchName from '../views/MatchName.jsx'; 
import EventTime from '../views/EventTime.jsx'; 
import BettableTag from '../views/BettableTag.jsx'; 
import LeagueInfo from '../views/LeagueInfo.jsx'; 
import ReturnBtn from '../views/ReturnBtn.jsx';


const EventDetails = () => {
  // get this data from the redux store, which get populated when user clicks an event
  const eventDetails = useSelector(state => state.events.eventInFocus); 
  return (
    <section className='event-details-container'>
      <div className='left'>
        <LeagueInfo eventSlug={eventDetails.full_slug} />
        <MatchName name={eventDetails.name} />
        <BettableTag bettable={eventDetails.bettable} />
        <hr/>
        <EventTime start_date={eventDetails.start_date} start_datetime={eventDetails.start_datetime} />
      </div>
      {/* this div holds an image, it is purely decorative, has no real content, so I decided to have it be a background image */}
      <div className='right'></div>
    </section>
  )
}

export default EventDetails; 