import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { getEventDetails } from '../../redux/modules/events/EventsActionCreators'; 
import LeagueInfo from './LeagueInfo.jsx'; 


const Event = ({ eventInfo, isMainEvent }) => {
  const dispatch = useDispatch(); 

  return (
    <Link
      onClick={(id) => dispatch(getEventDetails(eventInfo.id))}
      to={`/event-details${eventInfo.full_slug}`}
      className={isMainEvent ? ' event main-event link ' : 'event event-card link'}
      >
      <LeagueInfo eventSlug={eventInfo.full_slug} />
      {eventInfo.name}
    </Link>
  )
}; 

export default Event; 