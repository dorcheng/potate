import React, { Component } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { ScrollView } from 'react-native';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.onSelectDay(day)
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
            textDayHeaderFontSize: 14,
            textSectionTitleColor: '#AC9C90',
          }}
        />
      </ScrollView>
    )
  }
}
