import { combineReducers } from 'redux'; 
import { eventsReducer } from '../modules/events/EventsReducer'; 

// in a real world setting there would be multiple reducers to combine

export const rootReducer = combineReducers({
  events: eventsReducer, 
}); 