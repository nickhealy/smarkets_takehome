import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { getEventDetails } from '../../redux/modules/events/EventsActionCreators';
import { FaClock } from 'react-icons/fa';
import LeagueInfo from './LeagueInfo'; 
import MatchName from './MatchName'

// this function returns how many hours relative to right now the event in question is
const getHoursFromNow = timestamp => { 
  // create date from passed in timestamp, and store current timestamp
  const eventTime = new Date(timestamp); 
  const now = new Date(); 
  // get difference between current time and event time
  const diff = eventTime.getUTCMinutes() - now.getUTCMinutes(); 

  // if event has already started, say it is happening now
  if ( diff < 0) return 'HAPPENING NOW'; 
  
  const hours = Math.floor(diff / 60); 
  const hoursUnit = hours > 1 ? 'HOURS' : 'HOUR';

  // if there is longer than an hour before the event, just list the hour
  if (diff > 60) return `${hours} ${hoursUnit} FROM NOW`;

  const minutes = diff - hours; 
  const minutesUnit = minutes > 1 ? 'MINUTES' : 'MINUTE'; 

  // otherwise list the minutes
  return `${minutes} ${minutesUnit} FROM NOW`; 
}

const Event = ({ eventInfo, isMainEvent }) => {
  const dispatch = useDispatch();
  const hoursFromNow = getHoursFromNow(eventInfo.start_datetime);  

  return (
    <Link
    // clicking the link updates the redux store with the click event's 
      onClick={(id) => dispatch(getEventDetails(eventInfo.id))}
      to={`/event-details${eventInfo.full_slug}`}
      className={isMainEvent ? ' event main-event link ' : 'event event-card link'}
      >
      <LeagueInfo eventSlug={eventInfo.full_slug} />
      <MatchName name = {eventInfo.name} />
      <div className='happening-now'>
        <FaClock />
        {hoursFromNow}
      </div>
    </Link>
  )
}; 

export default Event; 