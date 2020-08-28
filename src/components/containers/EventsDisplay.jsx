import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/modules/events/EventsActionCreators'; 
import Event from '../views/Event'; 
import EventsDescription from '../views/EventsDescription.jsx';
 
// get array of events froms store
const mapStateToProps = state => ({
  events: state.events.popularEvents
}); 

const mapDispatchToProps = dispatch => ({
  getEvents: dispatch(getEvents())
})

const EventsDisplay = ({ events }) => {
  // on first mounting of component, get the desired events
  useEffect(() => {
    getEvents();
  }, [])

  // I do not want to re-render this function whenever state changes anywhere in application, so I am wrapping it in a useCallback hook
  const renderEvents = useCallback(() => {
    return events.map((eventInfo, i) => {
      return (
        // the event components are basically the same, except the first one needs to be styled differently
        <Event key={`event+${eventInfo.name}`} isMainEvent={i === 0} eventInfo ={eventInfo} />
      )
    })
  }, [events]); 

  return (
    <>
    {/* I am passing 'Tennis' as a prop here because, in a more complex version of this application, the sport we are currently looking at would be dictacted by the user and, as such, passed down from the store or something similar */}
      <EventsDescription eventType={'Tennis'} />
      <div className="events-display">
        {renderEvents()}
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsDisplay);
