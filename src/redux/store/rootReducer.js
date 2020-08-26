import { combineReducers } from 'redux'; 
import { eventsReducer } from '../modules/events/EventsReducer'; 

export const rootReducer = combineReducers({
  events: eventsReducer, 
}); 