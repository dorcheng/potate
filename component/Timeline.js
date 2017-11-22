import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import fakeEvents from '../testData';


export default class Timeline extends Component {
  constructor(){
    super()
    this.onViewEvent.bind(this)
  }

  onViewEvent(evt) {
    this.props.navigation.navigate('SingleEvent', evt);
  }

  render() {
    return (
      <ScrollView>
        <List containerStyle={{backgroundColor: '#21152d', marginTop: 0, borderTopColor: '#21152d', borderBottomColor: '#21152d' }}>
          {fakeEvents.map((event) => (
              <ListItem
                noBorder
                containerStyle={{backgroundColor: '#0f051c', borderBottomWidth: 10, borderBottomColor: '#21152d'}}
                chevronColor='#6f637b'
                underlayColor='#1a1227'
                key={event.id}
                title={event.dayOfWeek}
                titleStyle={{color: '#6f637b', fontSize: 16}}
                subtitle={event.description}
                subtitleStyle={{color: '#a59ab5', fontSize: 18, fontFamily: 'sans-serif-thin'}}
                subtitleContainerStyle={{marginBottom: 10}}
                onPress={() => this.onViewEvent(event)}
              />)
          )}
        </List>
      </ScrollView>
    );
  }
}
