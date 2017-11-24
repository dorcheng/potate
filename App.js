import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BKT } from './secrets';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Tabs, Root } from './routes'

var config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BKT
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.textLabel}>P O T A T E</Text>
//         <Login />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 200,
//   },
//   textLabel: {
//     fontSize: 20
//   }
// });

export default class App extends Component {
  render() {
    return <Root />;
  }
}
