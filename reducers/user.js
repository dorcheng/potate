import { firebaseRef } from '../server/firebase'

// ACTION TYPES
const GET_CURR_USER = 'GET_CURR_USER'

// ACTION CREATORS
export const getCurrUser = user => ({ type: GET_CURR_USER, user })

// THUNKS

export const getCurrUserThunk = () =>
dispatch => {
  firebaseRef.auth().onAuthStateChanged(function(user) {
    if (user) {
      dispatch(getCurrUser(user))
    } else {
      dispatch(getCurrUser(null))
    }
  });
}

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function userReducer (state = {}, action) {

    switch (action.type) {

      case GET_CURR_USER:
        return action.user

      default:
        return state
    }
  }

