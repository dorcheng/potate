import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList} from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import fakeEvents from '../testData';


export default class Timeline extends Component {
  constructor(){
    super()
    this.onViewEvent.bind(this)
    this.renderSeparator.bind(this)
  }

  onViewEvent(evt) {
    this.props.navigation.navigate('SingleEvent', evt);
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: 10,
          backgroundColor: "#252530"
        }}
      />
    );
  };

  // render() {
  //   return (
  //     <ScrollView>
  //       <List containerStyle={{backgroundColor: '#282834', marginTop: 0, borderTopColor: '#282834', borderBottomColor: '#282834' }}>
  //         {fakeEvents.map((event) => (
  //             <ListItem
  //               noBorder
  //               containerStyle={{backgroundColor: 'rgba(40, 40, 52, 0.4)', borderTopWidth: 5, borderTopColor: '#282834', borderBottomWidth: 5, borderBottomColor: '#282834', borderLeftWidth: 10, borderLeftColor: '#282834',borderRightWidth: 10, borderRightColor: '#282834', elevation: 4, shadowOpacity: 4}}
  //               chevronColor='#86754C'
  //               underlayColor='#1a1227'
  //               key={event.id}
  //               title={event.dayOfWeek}
  //               titleStyle={{color: '#86754C', fontSize: 16}}
  //               subtitle={event.description}
  //               subtitleStyle={{color: '#AC9C90', fontSize: 18}}
  //               subtitleContainerStyle={{marginBottom: 10}}
  //               onPress={() => this.onViewEvent(event)}
  //             />)
  //         )}
  //       </List>
  //     </ScrollView>
  //   );
  // }
  render() {
    return (
      <List containerStyle={{ backgroundColor: '#30303c', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, marginBottom: 0}}>
        <FlatList
          data={fakeEvents}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListItem
              noBorder
              avatar={
                <View style={{justifyContent: 'center', alignItems: 'center', width: 65}}>
                  <Text style={{fontSize: 20, color: '#ffde88', fontWeight: 'bold'}}>{item.dayOfWeek}</Text>
                </View>
              }
              title={`${item.month} ${item.date}, ${item.year}`}
              subtitle={item.description}
              containerStyle={{ backgroundColor: '#30303c', borderBottomWidth: 8, borderBottomColor: '#252530'}}
              onPress={() => this.onViewEvent(item)}
              titleStyle={{color: '#92929e', fontSize: 16}}
              subtitleStyle={{color: '#AC9C90', fontSize: 16}}
            />
          )}
        />
      </List>
    );
  }
}

{/* data={this.state.data} */}
{/* leftIcon={<Icon name="event-seat" type="material-icon" size={25} color='#f1e7f9'style={{marginLeft: '10%'}}/>} */}
// width: "85%",
// backgroundColor: "#252530",
// marginLeft: "7%"
// ItemSeparatorComponent={this.renderSeparator}
