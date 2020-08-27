import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { getEventDetails } from '../../redux/modules/events/EventsActionCreators'; 


const Event = ({ eventInfo, gridId }) => {
  const dispatch = useDispatch(); 

  return (
  <Link
    onClick={(id) => dispatch(getEventDetails(eventInfo.id))}
    to={`/event-details${eventInfo.full_slug}`}
    className={`event event-card event-card-${gridId} link`}
    >{eventInfo.name}</Link>
  )
}; 

export default Event; 