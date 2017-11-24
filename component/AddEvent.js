import React from 'react';
import { Text, ScrollView } from 'react-native';
import DatePicker from './DatePicker'


export default class AddEvent extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#252530'}}>
        <Text>Add Event</Text>
        <DatePicker />
      </ScrollView>
    );
  }
}
