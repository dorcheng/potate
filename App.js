import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BKT } from './secrets';
import { StackNavigator } from 'react-navigation';
import { Root } from './routes'
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './reducers'

var config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BKT
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
