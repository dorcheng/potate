import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'
import DatePicker from './DatePicker'
import { updateEvent, deleteEvent } from '../reducers/events'


export default class EditEvent extends Component {
  constructor(props){
    super(props)

    const { dateString, day, dayOfWeek, description, key, month, name, streak, type, year } = this.props.navigation.state.params

    this.state = {
      dateString,
      day,
      dayOfWeek,
      description,
      key,
      month,
      name,
      streak,
      type,
      year
    }

    this.onSelectDay = this.onSelectDay.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onSelectDay(selectedDay){
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const { day, month, year, dateString } = selectedDay
    const dayOfWeek = days[new Date(dateString).getDay()]
    this.setState({day, month, year, dayOfWeek, dateString})
  }

  onSave(){
    updateEvent(this.state)
    this.props.navigation.navigate('Timeline')
  }

  onDelete(){
    deleteEvent(this.state)
    this.props.navigation.navigate('Timeline')
  }

  render() {
    console.log('EDIT EVENT', this.state)

    return (
      <ScrollView style={{backgroundColor: '#252530'}}>
        <DatePicker selected={this.state.dateString} onSelectDay={this.onSelectDay}/>
        <KeyboardAvoidingView>
          <List containerStyle={{ backgroundColor: '#30303c', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 10, marginBottom: 0}}>
            <ListItem
              hideChevron
              containerStyle={{ backgroundColor: '#30303c', borderBottomWidth: 1, borderBottomColor: '#252530'}}
              title="Name"
              titleStyle={{color: '#FEF0D0', fontSize: 16}}
              textInput={true}
              textInputValue={this.state.name}
              textInputStyle={{color: '#AC9C90', fontSize: 16, paddingTop: 0, paddingBottom: 0, textAlign: 'left'}}
              textInputMultiline={true}
              textInputOnChangeText={name => this.setState({name})}
              textInputSelectTextOnFocus={true}
              />
            <ListItem
              hideChevron
              containerStyle={{ backgroundColor: '#30303c', borderBottomWidth: 1, borderBottomColor: '#252530'}}
              title="Description"
              titleStyle={{color: '#FEF0D0', fontSize: 16}}
              textInput={true}
              textInputValue={this.state.description}
              textInputStyle={{color: '#AC9C90', fontSize: 16, paddingTop: 0, paddingBottom: 0, textAlign: 'left'}}
              textInputMultiline={true}
              textInputOnChangeText={description => this.setState({description})}
            />
            <ListItem
              hideChevron
              containerStyle={{ backgroundColor: '#30303c', borderBottomWidth: 1, borderBottomColor: '#252530'}}
              title="Type"
              titleStyle={{color: '#FEF0D0', fontSize: 16}}
              textInput={true}
              textInputValue={this.state.type}
              textInputStyle={{color: '#AC9C90', fontSize: 16, paddingTop: 0, paddingBottom: 0, textAlign: 'left'}}
              textInputMultiline={true}
              textInputOnChangeText={type => this.setState({type})}
            />
          </List>
        </KeyboardAvoidingView>
        <View style={{flexDirection:'row', justifyContent: 'center', marginBottom: 400}}>
          <Button
            small
            raised
            iconRight={{name: 'emoticon-excited', type:'material-community', color:'#282834'}}
            backgroundColor={'#ffde88'}
            borderRadius={30}
            textStyle={{color:'#282834', fontSize:18, fontWeight:'bold'}}
            containerViewStyle={{marginTop: 25, width: 150, borderRadius: 30, alignSelf: 'center'}}
            buttonStyle={{height: 35}}
            title={'SAVE'}
            onPress={this.onSave}
          />
          <Button
            small
            raised
            iconRight={{name: 'emoticon-sad', type:'material-community', color:'#282834'}}
            backgroundColor={'#E38277'}
            borderRadius={30}
            textStyle={{color:'#282834', fontSize:18, fontWeight:'bold'}}
            containerViewStyle={{marginTop: 25, width: 150, borderRadius: 30, alignSelf: 'center'}}
            buttonStyle={{height: 35}}
            title={'DELETE'}
            onPress={this.onDelete}
          />
        </View>
      </ScrollView>
    );
  }
}
