import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, FlatList } from 'react-native';
import { List, ListItem, Icon, Badge } from 'react-native-elements';
import { getUsersThunk } from '../reducers/users'
import { addFriend, deleteFriend } from '../reducers/friends'


class UsersList extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.renderSeparator.bind(this)
  }

  componentDidMount(){
    this.props.loadUsers()
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: 10,
          backgroundColor: "#252530"
        }}
      />
    );
  };

  render() {
    const friends = this.props.info ? this.props.info.friends : null
    const users = this.props.users.length > 0 ? this.props.users.filter(user => user.key !== this.props.info.key) : null
    console.log('THIS IS USERS FROM LIST', users)
    console.log('friends', friends)
    return (
      users ?
      <ScrollView style={{backgroundColor: '#252530'}}>
        <List containerStyle={{ backgroundColor: '#30303c', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, marginBottom: 0}}>
            <FlatList
              containerStyle={{zIndex: 0}}
              data={users}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <ListItem
                  noBorder
                  containerStyle={{ justifyContent: 'center', alignItems: 'center',backgroundColor: '#30303c', borderBottomWidth: 9, borderBottomColor: '#252530', height: 90}}
                  avatar={
                    <View style={{width: 65, height: 80, justifyContent: 'center',
                    alignItems: 'center'}}>
                      <Text style={{fontSize: 20, color: '#ffde88', fontWeight: 'bold'}}>{item.firstName}</Text>
                    </View>
                  }
                  rightIcon={friends && friends[item.key] ?
                    <Badge containerStyle={{marginTop:30, marginRight: 10}} value={'FRIENDS'}
                    textStyle={{ color: '#ffde88' }} onPress={() => {deleteFriend(item.key, this.props.info.key)}}>
                    </Badge> : <Badge containerStyle={{marginTop:30, marginRight: 10}} value={'ADD'}
                    textStyle={{ color: '#ffde88' }} onPress={() => {addFriend(item.key, this.props.info.key)}}>
                    </Badge>
                  }
                  subtitle={
                    <View>
                      <Text style={{color: '#AC9C90', marginBottom: 5, marginLeft: 5}}> {item.firstName}</Text>
                      <Text style={{color: '#FEF0D0', marginLeft: 5}}>{item.lastName}</Text>
                    </View>
                    }
                  titleStyle={{color: '#92929e', fontSize: 16}}
                  subtitleStyle={{color: '#AC9C90', fontSize: 16}}
                />
              )}
            />
        </List>
      </ScrollView>
      :
      <ScrollView style={{backgroundColor: '#252530'}}>
        <View onLayout={(event) => {
          let {x, y, width, height} = event.nativeEvent.layout
          this.setState({width, height})
          }}>
          <Icon name="emoticon-sad" type="material-community" size={40} color='#73737f' marginTop={this.state.height / 1.6}/>
          <Text style={{ color: '#ffde88', alignSelf: 'center', fontSize: 14, marginTop: 15}}>No Users Found</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({users: state.users, info: state.info})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers(){
      dispatch(getUsersThunk())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
