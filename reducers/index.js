import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // freeze app to ensure no side-effects on state
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import events from './events'
import user from './user'
import users from './users'
import info from './userInfo'
// import all reducer files in reducer folder

const rootReducer = combineReducers({
  user,
  info,
  events,
  users
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));

export default store
