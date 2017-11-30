// ACTION TYPES
const GET_EVENTS = 'GET_EVENT'
const ADD_EVENT = 'ADD_EVENT'

// ACTION CREATORS
export const getEvents = events => ({ type: GET_EVENTS, events })
export const addEvent = event => ({ type: ADD_EVENT, event })

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function eventReducer (state = [], action) {

  switch (action.type) {

    case GET_EVENTS:
      return action.events

    case ADD_EVENT:
      // return Object.assign({}, state, { events: state.events.concat(action.event) })
      return state.concat(action.event)

    default:
      return state
  }
}
