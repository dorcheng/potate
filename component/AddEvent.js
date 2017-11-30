import React from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, View} from 'react-native';
import DatePicker from './DatePicker'
import EventForm from './EventForm'
import { addEvent } from '../reducers/events'


class AddEvent extends React.Component {
  constructor(){
    super()

    this.state = {
      id: null,
      name: '',
      description: '',
      day: 0,
      month: 0,
      year: 0,
      dayOfWeek: 'MON',
      streak: false
    }

    this.onSelectDay = this.onSelectDay.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSelectDay(selectedDay){
    let id = Date.now()
    const { day, month, year } = selectedDay
    this.setState({day, month, year, id})
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
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#252530'}}>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Select a date</Text>
        <DatePicker onSelectDay={this.onSelectDay}/>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Add a potate</Text>
        <EventForm onSubmit={this.onSubmit} onChangeName={this.onChangeName} onChangeDescription={this.onChangeDescription}/>
        <View style={{ height: 600 }} />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleAddEvent(event) {
      console.log(event, "dispatching this")
			dispatch(addEvent(event))
		}
	}
}

export default connect(null, mapDispatchToProps)(AddEvent)
