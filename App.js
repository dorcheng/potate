import React, { Component } from 'react';
import { Root } from './routes'
import { Provider } from 'react-redux';
import store from './reducers'

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
