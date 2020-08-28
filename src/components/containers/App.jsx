import React from 'react';
import EventsDisplay from './EventsDisplay.jsx';
import EventDetailsContainer from './EventDetailsContainer.jsx'; 
import {
  Switch,
  Route
} from "react-router-dom";

// for now, there are two routes: one to the page that displays the events '/', and one to the page with details about a particular event


const App = () => {

  return (
    <div className="app-container">
      <Switch>
        <Route path='/event-details'>
          <EventDetailsContainer />
        </Route>
        <Route path='/'>
          <EventsDisplay />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
