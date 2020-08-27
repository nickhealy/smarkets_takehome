import { GET_EVENTS } from './EventsActionTypes'; 
const axios = require('axios'); 

export const getEvents = sport => {
  // get the ids of the main events of a particular sport
  return async (dispatch) => {
    const popularEventsResponse = await axios.get('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/tennis/'); 
    const eventIds = popularEventsResponse.data.popular_event_ids;
    const eventsDataResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${eventIds.toString()}/`); 
    const events = eventsDataResponse.data.events; 

    return dispatch({
      type: GET_EVENTS, 
      payload: events
    })
  }
}