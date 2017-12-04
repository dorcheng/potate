import { database } from '../server/firebase'

// ACTION TYPES
const LOAD_EVENTS = 'LOAD_EVENTS'
// const ADD_EVENT = 'ADD_EVENT'

// ACTION CREATORS
export const loadEvents = events => ({ type: LOAD_EVENTS, events })
// export const addEvent = event => ({ type: ADD_EVENT, event })

//THUNKS
function snapshotListToArray(snapshots){
  let resultArr = [];

  snapshots.forEach(singleSnapshot => {
    const item = singleSnapshot.val()
    item.key = singleSnapshot.key
    resultArr.push(item)
  })
  return resultArr
}

export const getEventsThunk = () =>
dispatch => {
  database.ref('/events/').on('value', (snapshot) => {
    if(snapshot.val()) {
      dispatch(loadEvents(snapshotListToArray(snapshot)))
    } else {
      return null
    }
  })
}

// FIREBASE ACTIONS

export function writeEvent(event) {
  database.ref().child('events').push(event)

  // const newEventKey = database.ref().child('events').push().key
  // const updates = {}
  // updates['/events/' + newEventKey] = event
  // database.ref().update(updates)
}

export function updateEvent(newUpdate) {
  database.ref(`events/${newUpdate.key}`).update(newUpdate)
}

export function deleteEvent(eventToDelete){
  database.ref(`events/${eventToDelete.key}`).remove();
}

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function eventReducer (state = [], action) {

  switch (action.type) {

    case LOAD_EVENTS:
      return action.events

    // case ADD_EVENT:
    //   // return Object.assign({}, state, { events: state.events.concat(action.event) })
    //   return state.concat(action.event)

    default:
      return state
  }
}
