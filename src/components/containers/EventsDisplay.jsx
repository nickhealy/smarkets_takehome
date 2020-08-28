import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/modules/events/EventsActionCreators'; 
import Event from '../views/Event'; 
import EventsDescription from '../views/EventsDescription.jsx';
 


const mapStateToProps = state => ({
  events: state.events.popularEvents
}); 

const mapDispatchToProps = dispatch => ({
  getEvents: dispatch(getEvents())
})

const EventsDisplay = ({ events }) => {

  useEffect(() => {
    getEvents();
  }, [])

  const renderEvents = useCallback(() => {
    return events.map((eventInfo, i) => {
      return (
        <Event key={`event+${eventInfo.name}`} isMainEvent={i === 0} eventInfo ={eventInfo} />
      )
    })
  }, [events]); 

  return (
    <>
      <EventsDescription eventType={'Tennis'} />
      <div className="events-display">
        {renderEvents()}
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsDisplay);
