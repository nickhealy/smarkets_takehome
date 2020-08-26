import { GET_EVENTS } from './EventsActionTypes'; 
const axios = require('axios'); 

export const getEvents = sport => {
  // get the ids of the main events of a particular sport
  return async (dispatch) => {
    const popularEvents = await axios.get('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/tennis/'); 
    const eventIds = popularEvents.data.popular_event_ids;
    const eventsData = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${eventIds.toString()}/`); 
    const events = eventsData.data.events; 

    return dispatch({
      type: GET_EVENTS, 
      payload: events
    })
  }
}