import { database } from '../server/firebase'

// ACTION TYPES
const LOAD_EVENTS = 'LOAD_EVENTS'

// ACTION CREATORS
export const loadEvents = events => ({ type: LOAD_EVENTS, events })

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

export const getEventsThunk = (id) =>
dispatch => {
  console.log('trying to load events')
  const eventsRef = database.ref('events').orderByChild('user').equalTo(id);
  eventsRef.on('value', (snapshot) => {
    if(snapshot.val()) {
      dispatch(loadEvents(snapshotListToArray(snapshot)))
    } else {
      return null
    }
  })
}

// FIREBASE ACTIONS

export function writeEvent(event, id) {
  const eventRef = database.ref().child('events').push(event)
  const eventKey = eventRef.key
  eventRef.update({user: id})
  database.ref(`users/${id}/events`).update({[eventKey]: true})
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

    default:
      return state
  }
}
