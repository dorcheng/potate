import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, FlatList } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { getEvents } from '../reducers'
import fakeEvents from '../testData';


class Timeline extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: this.props.events,
      width: 0,
      height: 0
    }
    this.onViewEvent.bind(this)
    this.renderBadge.bind(this)
    this.renderSeparator.bind(this)
  }

  componentDidMount() {
    // get events from firebase -> this.props.loadEvents(events) which will dispatch the events from firebase to the store
  }

  onViewEvent(evt) {
    // set event to the setEvent property on the redux state
    // this.props.setSingleEvent(evt)
    this.props.navigation.navigate('SingleEvent', evt);
  }

  renderBadge(item){
    const val = item.streak ? { value: 'NEW STREAK', textStyle: { color: '#ffde88'}, containerStyle: {marginTop:30} } : null
    return val;
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

  render() {
    console.log("hello i am events", this.props.events)
    return (
      this.props.events.length > 0 ?
      <List containerStyle={{ backgroundColor: '#30303c', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, marginBottom: 0}}>
          <FlatList
            data={this.state.events}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ListItem
                noBorder
                hideChevron
                containerStyle={{ justifyContent: 'center', alignItems: 'center',backgroundColor: '#30303c', borderBottomWidth: 8, borderBottomColor: '#252530', height: 80}}
                avatar={
                  <View style={{width: 65, height: 80, justifyContent: 'center',
                  alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: '#ffde88', fontWeight: 'bold'}}>{item.dayOfWeek}</Text>
                  </View>
                }
                badge={this.renderBadge(item)}
                title={`${(item.month).slice(0,3)} ${item.date}, ${item.year}`}
                subtitle={item.description}
                onPress={() => this.onViewEvent(item)}
                titleStyle={{color: '#92929e', fontSize: 16}}
                subtitleStyle={{color: '#AC9C90', fontSize: 16}}
              />
            )}
          />
      </List>
      :
      <ScrollView style={{backgroundColor: '#252530'}}>
        <View onLayout={(event) => {
          let {x, y, width, height} = event.nativeEvent.layout
          this.setState({width, height})
          }}>
          <Icon name="emoticon-sad" type="material-community" size={40} color='#73737f' marginTop={this.state.height / 1.6}/>
          <Text style={{ color: '#ffde88', alignSelf: 'center', fontSize: 14, marginTop: 15}}>No Events</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({events: state.events})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSingleEvent(evt) {
//       dispatch(setEvent(evt))
//     },
//     // loadEvents(events){
// 		// 	dispatch(getEvents(events))
// 		// }
//   }
// }

export default connect(mapStateToProps)(Timeline)

// export default Timeline
