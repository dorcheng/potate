import { database } from '../server/firebase'

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO'

// ACTION CREATORS
export const getUserInfo = info => ({ type: GET_USER_INFO, info })

// THUNKS
function snapshotToObject(snapshot){
  const item = snapshot.val()
  item.key = snapshot.key

  return item
}

export const getUserInfoThunk = (id) =>
dispatch => {
  database.ref(`users/${id}`).on('value', (snapshot) => {
    if(snapshot.val()) {
      dispatch(getUserInfo(snapshotToObject(snapshot)))
    } else {
      return null
    }
  })
}

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function infoReducer (state = {}, action) {

    switch (action.type) {

      case GET_USER_INFO:
        return action.info

      default:
        return state
    }
  }

