import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import { TouchableOpacity, View, Text, Platform } from 'react-native'
import Timeline from './component/Timeline'
import Settings from './component/Settings'
import EditEvent from './component/EditEvent'
import Home from './component/Home'
import AddEvent from './component/AddEvent'
import Login from './component/Login'
import UsersList from './component/UsersList'


export const TimelineStack = StackNavigator({
  Timeline: {
    screen: Timeline,
    navigationOptions: ({ navigation }) => ({
      title: 'This Week',
      headerStyle: { backgroundColor: '#41414d' },
      headerTitleStyle: {
        color: '#73737f',
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-thin',
        alignSelf: 'center',
        paddingBottom: 15
      },
      headerLeft: null,
      headerRight: null
      // (
      //   <TouchableOpacity
      //   onPress={() => navigation.navigate('Timeline')}
      //   >
      //     <View style={{ marginRight: 26, marginBottom: 15 }}>
      //       <Icon name="inbox" type="feather" size={22} color='#73737f'/>
      //       {/* <Text style={{ color: '#73737f', fontSize: 10 }} >Archive</Text> */}
      //     </View>
      //   </TouchableOpacity>
      // )
    })
  },
  EditEvent: {
    screen: EditEvent,
    navigationOptions: ({ navigation }) => ({
      // title: navigation.state.params.name,//undefined
      title: 'Edit Potate',
      headerStyle: { backgroundColor: '#41414d' },
      headerTitleStyle: {
        color: '#73737f',
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-thin',
        alignSelf: 'center',
        marginBottom: 15,
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddEvent')}
          >
          <View style={{ marginRight: 26, marginBottom: 15 }}>
            <Icon name="edit-3" type="feather" size={22} color='#73737f'/>
            {/* <Text style={{ color: '#73737f' }} >Edit</Text> */}
          </View>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
          <View style={{ marginLeft: 26, marginBottom: 15}}>
            <Icon name="arrow-left" type="feather" size={22} color='#73737f'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
});

// Tabs will show timeline tab (which will show TimelineStack) and settings tab
export const Tabs = TabNavigator({
  Stats: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Activity' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="activity" type="feather" size={18} color={ tintColor }/>
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
      indicatorStyle: {
        backgroundColor: '#ffde88'
      },
      labelStyle: {
        fontSize: 12,
      }
    },
});

// HomeTabs will show home tab (which will show TimelineStack) and settings tab
export const HomeTabs = TabNavigator({
  // Badges: {
  //   screen: Home,
  //   navigationOptions: {
  //     tabBarLabel: ({ focused }) => (focused ? 'Badges' : ''),
  //     tabBarIcon: ({ tintColor }) => <Icon name="award" type="feather" size={18} color={ tintColor }/>
  //   }
  // },
  Leaderboard: {
    screen: TimelineStack,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Leaderboard' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="award" type="feather" size={18} color={ tintColor }/>
    }
  },
  // Friends: {
  //   screen: AddEvent,
  //   navigationOptions: {
  //     tabBarLabel: ({ focused }) => (focused ? 'Friends' : ''),
  //     tabBarIcon: ({ tintColor }) => <Icon name="users" type="feather" size={18} color={ tintColor }/>
  //   }
  // },
  AddFriend: {
    screen: UsersList,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Add Friend' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="user-plus" type="feather" size={18} color={ tintColor }/>
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (focused ? 'Settings' : ''),
      tabBarIcon: ({ tintColor }) => <Icon name="settings" type="feather" size={18} color={ tintColor }/>
    }
  }
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
      indicatorStyle: {
        backgroundColor: '#ffde88'
      },
      labelStyle: {
        fontSize: 12,
      }
    },
});

export const Root = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
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
      headerRight: null
      // (
      //   <TouchableOpacity
      //     onPress={() => navigation.navigate('Settings')}
      //     >
      //     <View style={{ marginRight: 26 }}>
      //       <Icon name="settings" type='feather' size={16} color='#92929e'/>
      //       {/* <Text style={{ color: '#92929e' }} >Settings</Text> */}
      //     </View>
      //   </TouchableOpacity>
      // )
      ,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ marginLeft: 26 }}>
            <Icon name="short-text" type="material-icon" size={24} color='#92929e'/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  Home: {
    screen: HomeTabs,
    navigationOptions: ({ navigation }) => ({
      // title: navigation.state.params.name,//undefined
      header: (// custom header
        <View style={{ backgroundColor:'#30303c' }}>
          <Home />
          <Button
            small
            raised
            iconRight={{name: 'emoticon-excited', type:'material-community', color:'#282834'}}
            backgroundColor={'#ffde88'}
            borderRadius={30}
            textStyle={{color:'#282834', fontSize:16, fontWeight:'bold'}}
            containerViewStyle={{marginTop: 8, marginBottom: 20, width: 160, borderRadius: 30, alignSelf: 'center'}}
            buttonStyle={{height: 30}}
            title={'POTATE'}
            onPress={() => navigation.navigate('Top')}
          />
        </View>
      ),
      // title: 'WELCOME',
      // headerStyle: { backgroundColor:'#282834', height: 70, borderTopWidth: 30, borderTopColor:'#282834', elevation: 0, shadowOpacity: 0},
      // headerTitleStyle: {
      //   color: '#92929e',
      //   fontSize: 18,
      //   alignSelf: 'center',
      // },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Top')}
          >
          <View style={{ marginRight: 26, marginBottom: 15 }}>
            <Icon name="arrow-right" type="feather" size={22} color='#73737f'/>
          </View>
        </TouchableOpacity>
      ),
      headerLeft: null
    })
  },
  // Settings: {
  //   screen: Settings
  // }
})
