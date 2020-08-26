import { GET_EVENTS } from "./EventsActionTypes"

const initialState = {
  popularEvents: []
}


export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        popularEvents: action.payload
      }; 
    default: 
      return state;
  }
}