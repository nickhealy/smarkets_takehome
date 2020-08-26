import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from './redux/modules/events/EventsActionCreators'; 

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
  return (
    <div className="App">
      Hello
      Events are {events}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
