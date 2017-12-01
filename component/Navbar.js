import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


export default class Navbar extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Navbar</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
