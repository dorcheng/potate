import { database } from '../server/firebase'

// FIREBASE ACTIONS

export function addFriend(friendId, id) {
  database.ref(`users/${id}/friends`).update({[friendId]: true})
  database.ref(`users/${friendId}/friends`).update({[id]: true})
}

export function deleteFriend(friendId, id){
  database.ref(`users/${id}/friends`).update({[friendId]: null})
  database.ref(`users/${friendId}/friends`).update({[id]: null})
}
