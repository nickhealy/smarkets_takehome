import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { getEventDetails } from '../../redux/modules/events/EventsActionCreators';
import { FaClock } from 'react-icons/fa';
import LeagueInfo from './LeagueInfo'; 
import MatchName from './MatchName'

// this function returns how many hours relative to right now the event in question is
const getHoursFromNow = timestamp => {
  const eventTime = new Date(timestamp); 
  const now = new Date(); 

  return eventTime.getUTCHours() - now.getUTCHours(); 
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
      <div class='happening-now'>
        <FaClock />
        { hoursFromNow > 0 
          ? hoursFromNow === 1 
          ? hoursFromNow + ' HOUR FROM NOW' 
          : hoursFromNow + ' HOURS FROM NOW' 
          : 'HAPPENING NOW'
        }</div>
    </Link>
  )
}; 

export default Event; 