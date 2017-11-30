import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import events from './events'
// import all reducer files in reducer folder

const rootReducer = combineReducers({
  events
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store
