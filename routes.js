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


export const TimelineStack = StackNavigator({
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      title: 'This Week',
      headerStyle: { backgroundColor: '#21152d'},
      headerTitleStyle: {
        color: '#6f637b',
        fontSize: 18,
        fontFamily: 'sans-serif-thin'
      },
      headerLeft: null
    }
  },
  SingleEvent: {
    screen: SingleEvent,
    navigationOptions: ({ navigation }) => ({
      // title: navigation.state.params.name,//undefined
      title: 'Event',
      headerStyle: { backgroundColor: '#21152d'},
      headerTitleStyle: {
        color: '#6f637b',
        fontSize: 18,
        fontFamily: 'sans-serif-thin'
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('DatePicker')}
          >
          {/* onPress={() => navigation.setParams({ mode: navigation.state.params.mode === 'edit' ? '' : 'edit' })}
          > */}
          <View style={{ marginRight: 26 }}>
            <Icon name="ios-create-outline" type="ionicon" size={24} color='#a59ab5'/>
            <Text style={{ color: '#a59ab5' }} >Edit</Text>
          </View>
          {/* {navigation.state.params.mode === 'edit' ? (<View style={{ marginRight: 26 }}>
            <Icon name="ios-checkmark-circle-outline" type="ionicon" size={24} color='#f1e7f9'/>
            <Text style={{ color: '#f1e7f9' }}>Done</Text>
          </View>) : (<View style={{ marginRight: 26 }}>
            <Icon name="ios-create-outline" type="ionicon" size={24} color='#a59ab5'/>
            <Text style={{ color: '#a59ab5' }} >Edit</Text>
          </View>)} */}
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
  DatePicker: {
    screen: AddEvent,
    navigationOptions: ({ navigation }) => ({
      title: 'Date',
      headerStyle: { backgroundColor: '#21152d'},
      headerTitleStyle: {
        color: '#6f637b',
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleEvent')}
          >
          <View style={{ marginRight: 26 }}>
            <Icon name="ios-checkmark-circle-outline" type="ionicon" size={24} color='#f1e7f9'/>
            <Text style={{ color: '#f1e7f9' }}>Done</Text>
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
  }
});

// Tabs will show timeline tab (which will show TimelineStack) and settings tab
export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Home' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="navicon" type='evilicon' size={24} color={ tintColor }/>
    }
  },
  Timeline: {
    screen: TimelineStack,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Timeline' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="clock" type='evilicon' size={24} color={ tintColor }/>
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Settings' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="gear" type='evilicon' size={24} color={ tintColor }/>
    }
  },
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
      animationEnabled: true,
      activeTintColor: '#f1e7f9',
      inactiveTintColor: '#a59ab5',
      upperCaseLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#0f051c'
      },
      tabStyle: {
        marginTop: 37,
        marginBottom: 5,
      },
      indicatorStyle: {
        backgroundColor: '#fb7775'
      },
      labelStyle: {
        fontSize: 15,
      }
    },
});
