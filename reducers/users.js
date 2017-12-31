import { database } from '../server/firebase'

// ACTION TYPES
const LOAD_USERS = 'LOAD_USERS'

// ACTION CREATORS
export const loadUsers = users => ({ type: LOAD_USERS, users })

// THUNKS
function snapshotListToArray(snapshots){
  let resultArr = [];

  snapshots.forEach(singleSnapshot => {
    const item = singleSnapshot.val()
    item.key = singleSnapshot.key
    resultArr.push(item)
  })
  return resultArr
}

export const getUsersThunk = () =>
dispatch => {
  database.ref('users').on('value', (snapshot) => {
    console.log('WHAT IS THIS USERS', snapshot)
    if(snapshot.val()) {
      dispatch(loadUsers(snapshotListToArray(snapshot)))
    } else {
      return null
    }
  })
}

/* REDUCER

A reducer takes in a previous state & action, and returns a new state
It must be a pure function - instead of mutating the previous state, it should return a new object/state

*/
export default function usersReducer (state = [], action) {

    switch (action.type) {

      case LOAD_USERS:
        return action.users

      default:
        return state
    }
  }

