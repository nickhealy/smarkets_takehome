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

const App = ({ events }) => {

  useEffect(() => {
    getEvents();
  }, [])

  const renderEvents = useCallback(() => {
    return events.map((eventInfo, i) => {
      return i === 0
        ? <MainEvent eventInfo={eventInfo} /> 
        : <Event eventInfo ={eventInfo} />
    })
  }, [events]); 

  return (
    <div className="App">
      Hello
      {renderEvents()}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
