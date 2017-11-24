import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, View, Text } from 'react-native'
import Timeline from './component/Timeline'
import Settings from './component/Settings'
import SingleEvent from './component/SingleEvent'
import Home from './component/Home'
import Navbar from './component/Navbar'
import AddEvent from './component/AddEvent'
import DatePicker from './component/DatePicker'


export const TimelineStack = StackNavigator({
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      title: 'This Week',
      headerStyle: { backgroundColor: '#41414d', },
      headerTitleStyle: {
        color: '#73737f',
        fontSize: 18,
        alignSelf: 'center'
      },
      headerLeft: null
    }
  },
  SingleEvent: {
    screen: SingleEvent,
    navigationOptions: ({ navigation }) => ({
      // title: navigation.state.params.name,//undefined
      title: 'Event',
      headerStyle: { backgroundColor: '#364441'},
      headerTitleStyle: {
        color: '#6f637b',
        fontSize: 18,
        fontFamily: 'sans-serif-thin'
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddEvent')}
          >
          <View style={{ marginRight: 26 }}>
            <Icon name="ios-create-outline" type="ionicon" size={24} color='#a59ab5'/>
            <Text style={{ color: '#a59ab5' }} >Edit</Text>
          </View>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
          <View style={{ marginLeft: 26 }}>
            <Icon name="ios-arrow-back" type="ionicon" size={24} color='#a59ab5'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  // DatePicker: {
  //   screen: DatePicker,
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Choose a date',
  //     headerStyle: { backgroundColor: '#364441'},
  //     headerTitleStyle: {
  //       color: '#6f637b',
  //     },
  //     headerRight: (
  //       <TouchableOpacity
  //         onPress={() => navigation.navigate('AddEvent')}
  //         >
  //         <View style={{ marginRight: 26 }}>
  //           <Icon name="ios-checkmark-circle-outline" type="ionicon" size={24} color='#f1e7f9'/>
  //           <Text style={{ color: '#f1e7f9' }}>Done</Text>
  //         </View>
  //       </TouchableOpacity>
  //     ),
  //     headerLeft: (
  //       <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
  //         <View style={{ marginLeft: 26 }}>
  //           <Icon name="ios-arrow-back" type="ionicon" size={24} color='#a59ab5'/>
  //         </View>
  //       </TouchableOpacity>
  //     )
  //   })
  // },
  // AddEvent: {
  //   screen: AddEvent,
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Add a new event',
  //     headerStyle: { backgroundColor: '#364441'},
  //     headerTitleStyle: {
  //       color: '#6f637b',
  //     },
  //     headerRight: (
  //       <TouchableOpacity
  //         onPress={() => navigation.navigate('DatePicker')}
  //         >
  //         <View style={{ marginRight: 26 }}>
  //           <Icon name="ios-checkmark-circle-outline" type="ionicon" size={24} color='#f1e7f9'/>
  //           <Text style={{ color: '#f1e7f9' }}>Done</Text>
  //         </View>
  //       </TouchableOpacity>
  //     ),
  //     headerLeft: (
  //       <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
  //         <View style={{ marginLeft: 26 }}>
  //           <Icon name="ios-arrow-back" type="ionicon" size={24} color='#a59ab5'/>
  //         </View>
  //       </TouchableOpacity>
  //     )
  //   })
  // }
});

// Tabs will show timeline tab (which will show TimelineStack) and settings tab
export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Badges' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="award" type="feather" size={18} color={ tintColor }/>
    }
  },
  Timeline: {
    screen: TimelineStack,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'This Week' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="calendar" type="feather" size={18} color={ tintColor }/>
    }
  },
  AddEvent: {
    screen: AddEvent,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Add Event' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="plus" type="feather" size={18} color={ tintColor }/>
    }
  },
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
      animationEnabled: true,
      activeTintColor: '#FEF0D0',
      inactiveTintColor: '#92929e',
      upperCaseLabel: false,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#282834'
      },
      // tabStyle: {
      //   marginTop: 37,
      //   marginBottom: 5,
      // },
      indicatorStyle: {
        backgroundColor: '#ffde88'
      },
      labelStyle: {
        fontSize: 12,
      }
    },
});

export const Root = StackNavigator({
  Top: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      // title: navigation.state.params.name,//undefined
      title: 'POTATO TIMELINE',
      headerStyle: { backgroundColor:'#282834', height: 70, borderTopWidth: 30, borderTopColor:'#282834', elevation: 0, shadowOpacity: 0},
      headerTitleStyle: {
        color: '#92929e',
        fontSize: 18,
        alignSelf: 'center',
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          >
          <View style={{ marginRight: 26 }}>
            <Icon name="settings" type='feather' size={16} color='#92929e'/>
            {/* <Text style={{ color: '#92929e' }} >Settings</Text> */}
          </View>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
          <View style={{ marginLeft: 26 }}>
            <Icon name="short-text" type="material-icon" size={24} color='#92929e'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  Settings: {
    screen: Settings
  }
})
