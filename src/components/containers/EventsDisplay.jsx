import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/modules/events/EventsActionCreators'; 
import Event from '../views/Event'; 
import MainEvent from '../views/MainEvent'; 


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
      return i === 0
        ? <MainEvent key='main-event' eventInfo={eventInfo} /> 
        : <Event key={`event+${eventInfo.name}`} gridId={i} eventInfo ={eventInfo} />
    })
  }, [events]); 

  return (
    <div className="events-display">
      {renderEvents()}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsDisplay);
