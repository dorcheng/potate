import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, View} from 'react-native';
import DatePicker from './DatePicker'
import EventForm from './EventForm'
import { addEvent } from '../reducers/events'
import { writeEvent } from '../server/firebase'


class AddEvent extends Component {
  constructor(){
    super()

    this.state = {
      id: null,
      name: '',
      description: '',
      day: 0,
      month: 0,
      year: 0,
      dayOfWeek: '',
      dateString: '',
      streak: false
    }

    this.onSelectDay = this.onSelectDay.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderDateWarning = this.renderDateWarning.bind(this)
  }

  renderDateWarning(){
    return this.state.day === 0 ? true : false
  }

  onSelectDay(selectedDay){
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const id = Date.now()
    const { day, month, year, dateString } = selectedDay
    const dayOfWeek = days[new Date(dateString).getDay()]
    this.setState({id, day, month, year, dayOfWeek, dateString})
  }

  onChangeName(name){
    this.setState({name})
  }

  onChangeDescription(description){
    this.setState({description})
  }

  onSubmit(){
    this.props.handleAddEvent(this.state)
    this.props.navigation.navigate('Timeline');
    this.setState({dateString: '', day: 0})
    const { name, description, day, month, year, dayOfWeek, dateString, streak } = this.state
    writeEvent(name, description, day, month, year, dayOfWeek, dateString, streak)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#252530'}}>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Select a date</Text>
        <DatePicker onSelectDay={this.onSelectDay} selected={this.state.dateString}/>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Add a potate</Text>
        <EventForm onSubmit={this.onSubmit} onChangeName={this.onChangeName} onChangeDescription={this.onChangeDescription} renderDateWarning={this.renderDateWarning}/>
        <View style={{ height: 600 }} />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleAddEvent(event) {
			dispatch(addEvent(event))
		}
	}
}

export default connect(null, mapDispatchToProps)(AddEvent)
