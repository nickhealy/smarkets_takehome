import { GET_EVENTS, GET_EVENT_DETAILS } from './EventsActionTypes'; 
const axios = require('axios'); 

export const getEvents = sport => {
  return async (dispatch) => {
    // get the ids of the main events of a particular sport
    const popularEventsResponse = await axios.get('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/tennis/'); 
    const eventIds = popularEventsResponse.data.popular_event_ids;
    // use those ids to get the information about each sport
    const eventsDataResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${eventIds.toString()}/`); 
    const events = eventsDataResponse.data.events; 
    // send that information to the store
    return dispatch({
      type: GET_EVENTS, 
      payload: events
    })
  }
}; 

export const getEventDetails = id => {
  // id corresponds to unique id of the event
  return ({
    type: GET_EVENT_DETAILS, 
    payload: id
  })
}