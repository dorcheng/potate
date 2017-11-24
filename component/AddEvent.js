import React from 'react';
import { Text, ScrollView, View} from 'react-native';
import DatePicker from './DatePicker'
import EventForm from './EventForm'


export default class AddEvent extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#252530'}}>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Select a date</Text>
        <DatePicker />
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Add a potate</Text>
        <EventForm />
        <View style={{ height: 600 }} />
      </ScrollView>
    );
  }
}

// '#73737f'
