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
            calendarBackground: '#30303c',
            selectedDayBackgroundColor: '#ffde88',
            selectedDayTextColor: '#282834',
            todayTextColor: '#FEF0D0',
            dayTextColor: '#92929e',
            textMonthFontSize: 16,
            monthTextColor: '#92929e',
            textDayHeaderFontSize: 16,
            textSectionTitleColor: '#AC9C90',
          }}
        />
      </ScrollView>
    )
  }
}
