import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements'


export default class SingleEvent extends React.Component {
  render() {
    const { id, name, description, year, month, dayOfWeek, date } = this.props.navigation.state.params

    return (
      <ScrollView style={{backgroundColor: '#252530'}}>
        <Tile
          title={name}
          caption={`Month ${month} 15, ${year}`}
          borderBottomColor='#252530'
        />
        <List containerStyle={{ backgroundColor: '#30303c', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, marginBottom: 0}}>
          <ListItem
            hideChevron
            containerStyle={{ backgroundColor: '#30303c', borderBottomWidth: 1, borderBottomColor: '#252530'}}
            title="Description"
            titleStyle={{color: '#92929e', fontSize: 16}}
            rightTitle={description}
            rightTitleStyle={{color: '#AC9C90', fontSize: 16}}
          />
        </List>
      </ScrollView>
    );
  }
}
