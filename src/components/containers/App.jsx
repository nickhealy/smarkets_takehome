import React from 'react';
import EventsDisplay from './EventsDisplay.jsx';
import EventDetails from './EventDetails.jsx'; 
import {
  Switch,
  Route
} from "react-router-dom";



const App = () => {

  return (
    <div className="app-container">
      <Switch>
        <Route path='/event-details'>
          <EventDetails />
        </Route>
        <Route path='/'>
          <EventsDisplay />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
