import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, View} from 'react-native';
import DatePicker from './DatePicker'
import EventForm from './EventForm'
import { writeEvent } from '../reducers/events'


class AddEvent extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: '',
      type: '',
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
    this.onSelectType = this.onSelectType.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderDateWarning = this.renderDateWarning.bind(this)
  }

  renderDateWarning(){
    return this.state.day === 0 ? true : false
  }

  onSelectDay(selectedDay){
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const { day, month, year, dateString } = selectedDay
    const dayOfWeek = days[new Date(dateString).getDay()]
    this.setState({day, month, year, dayOfWeek, dateString})
  }

  onChangeName(name){
    this.setState({name})
  }

  onChangeDescription(description){
    this.setState({description})
  }

  onSelectType(type){
    this.setState({type})
  }

  onSubmit(){
    writeEvent(this.state, this.props.user.uid)
    this.props.navigation.navigate('Timeline');
    this.setState({dateString: '', day: 0})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#252530'}}>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Select a date</Text>
        <DatePicker onSelectDay={this.onSelectDay} selected={this.state.dateString}/>
        <Text style={{color: '#73737f', fontSize: 18, alignSelf: 'center', margin: 10, fontWeight: 'bold'}}>Add a potate</Text>
        <EventForm onSubmit={this.onSubmit} onChangeName={this.onChangeName} onChangeDescription={this.onChangeDescription} onSelectType={this.onSelectType} selectedType={this.state.type} renderDateWarning={this.renderDateWarning}/>
        <View style={{ height: 400 }} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(AddEvent)

