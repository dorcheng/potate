import React, { Component } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { ScrollView } from 'react-native';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render(){
    return (
      <ScrollView>
        <Calendar
          onDayPress={this.onDayPress}
          hideExtraDays
          hideArrows
          disableMonthChange
          markedDates={{[this.state.selected]: {selected: true}}}
          monthFormat={'MMMM yyyy'}
          firstDay={1}
          theme={{
            calendarBackground: '#0f051c',
            selectedDayBackgroundColor: '#372a48',
            selectedDayTextColor: '#f1e7f9',
            todayTextColor: '#f1e7f9',
            dayTextColor: '#a59ab5',
            textMonthFontSize: 16,
            monthTextColor: '#a59ab5',
            textDayHeaderFontSize: 16,
            textSectionTitleColor: '#f1e7f9',
          }}
        />
      </ScrollView>
    )
  }
}
