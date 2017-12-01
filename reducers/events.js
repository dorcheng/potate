import { database } from '../server/firebase'

// ACTION TYPES
const LOAD_EVENTS = 'LOAD_EVENTS'
const ADD_EVENT = 'ADD_EVENT'

// ACTION CREATORS
export const loadEvents = events => ({ type: LOAD_EVENTS, events })
export const addEvent = event => ({ type: ADD_EVENT, event })

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

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function eventReducer (state = [], action) {

  switch (action.type) {

    case LOAD_EVENTS:
      return action.events

    case ADD_EVENT:
      // return Object.assign({}, state, { events: state.events.concat(action.event) })
      return state.concat(action.event)

    default:
      return state
  }
}
