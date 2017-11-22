import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements'


export default class SingleEvent extends React.Component {
  render() {
    const { id, name, description, year, month, dayOfWeek, date } = this.props.navigation.state.params

    return (
      <ScrollView>
        <Tile
          title={name}
          caption={`Month ${month} 15, ${year}`}
        />
        <List>
          <ListItem
            title="Description"
            rightTitle={description}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}
