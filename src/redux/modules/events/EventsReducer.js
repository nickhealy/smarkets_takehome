import { GET_EVENTS, GET_EVENT_DETAILS } from "./EventsActionTypes"

const initialState = {
  popularEvents: [],
  eventInFocus: {}
}


export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        popularEvents: action.payload
      }; 
    case GET_EVENT_DETAILS:
      const selectedEvent = state.popularEvents.filter(event => event.id === action.payload)[0]; 
      return {
        ...state,
        eventInFocus: selectedEvent
      }; 
    default: 
      return state;
  }
}