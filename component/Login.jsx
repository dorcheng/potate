import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, FormLabel, FormInput, Button, Divider } from 'react-native-elements'
import { firebaseRef, database } from '../server/firebase'
import { getCurrUserThunk } from '../reducers/user'
import { getUserInfoThunk } from '../reducers/userInfo'
import { getEventsThunk } from '../reducers/events'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: '',
      loading: false,
      screen: 'login'
    }

    this.onLogin = this.onLogin.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  onLogin(){
    this.setState({error: '', loading: true})
    const { email, password } = this.state
    firebaseRef.auth().signInWithEmailAndPassword(email.trim(), password).then((user) => {
      this.props.setCurrUser()
      this.props.setUserInfo(user.uid)
      this.props.loadUserEvents(user.uid)
      this.setState({error: '', loading: false})
    })
    .then(() => this.props.navigation.navigate('Home'))
    .catch(() => this.setState({error: 'Log in with correct email and password or sign up'}))
  }

  onSignUp(){
    this.setState({error: '', loading: true})
    const { email, password, firstName, lastName } = this.state
    firebaseRef.auth().createUserWithEmailAndPassword(email.trim(), password).then((user) => {
      this.props.setCurrUser()
      database.ref('users/' + user.uid).set({
        firstName: firstName,
        lastName: lastName
      })
      this.props.setUserInfo(user.uid)
      this.setState({error: '', loading: false})
    })
    .then(() => this.props.navigation.navigate('Home'))
    .catch(() => this.setState({error: 'Password must be at least 6 characters long'}))
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'transparent',}}>
        <View style={{ flex: 1, position: 'absolute', alignItems: 'center'
          }}
        >
          <Image style={{ flex: 1, alignSelf: 'stretch', height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
            source={require('../backgroundnight.png')}
          />
        </View>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', opacity: 0.9}}>
          <Text style={{fontSize: 30, color: '#bfb1dd', opacity: 0.8}}>POTATE</Text>
          <Text style={{fontSize: 14, marginTop: 16, color: '#C28F9C', opacity: 0.8}}>COMPETE TO BE THE ULTIMATE POTATO</Text>
        </View>
        <View style={{
            flex: 1.6,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        {this.state.screen !== 'login' &&
          <View style={{flex: 0.62, flexDirection:'row', backgroundColor: 'rgba(238, 238, 238, 0.1)', width: '88%', marginVertical: 5}}>
            <Icon
              name='user'
              color='rgba(30, 19, 38, 0.5)'
              type='feather'
              fontSize={2}
              containerStyle={{marginLeft: 10}}
            />
            <FormInput
              value={this.state.firstName}
              onChangeText={firstName => this.setState({firstName, error: ''})}
              underlineColorAndroid="transparent"
              placeholder='Enter your first name'
              placeholderTextColor='rgba(30, 19, 38, 0.5)'
              fontSize={8}
              color='#EEEEEE'
              containerStyle={{alignSelf: 'center', borderBottomColor: 'transparent'}}
            />
          </View>
        }
        {this.state.screen !== 'login' ?
          <View style={{flex: 0.62, flexDirection:'row', backgroundColor: 'rgba(238, 238, 238, 0.1)', width: '88%', marginVertical: 5}}>
            <Icon
              name='user'
              color='rgba(30, 19, 38, 0.5)'
              type='feather'
              fontSize={2}
              containerStyle={{marginLeft: 10}}
            />
            <FormInput
              value={this.state.lastName}
              onChangeText={lastName => this.setState({lastName, error: ''})}
              underlineColorAndroid="transparent"
              placeholder='Enter your last name'
              placeholderTextColor='rgba(30, 19, 38, 0.5)'
              fontSize={8}
              color='#EEEEEE'
              containerStyle={{alignSelf: 'center', borderBottomColor: 'transparent'}}
            />
          </View> : <View style={{flex: 0.5}}/>}
          <View style={{flex: 0.62, flexDirection:'row', backgroundColor: 'rgba(238, 238, 238, 0.1)', width: '88%', marginVertical: 5}}>
            <Icon
              name='mail'
              color='rgba(30, 19, 38, 0.5)'
              type='feather'
              fontSize={2}
              containerStyle={{marginLeft: 10}}
            />
            <FormInput
              value={this.state.email}
              onChangeText={email => this.setState({email, error: ''})}
              underlineColorAndroid="transparent"
              placeholder='Enter your email'
              placeholderTextColor='rgba(30, 19, 38, 0.5)'
              fontSize={8}
              color='#EEEEEE'
              containerStyle={{alignSelf: 'center', borderBottomColor: 'transparent'}}
            />
          </View>
          <View style={{flex: 0.62, flexDirection:'row', backgroundColor: 'rgba(238, 238, 238, 0.1)', width: '88%', marginVertical: 5}} >
            <Icon
              name='key'
              color='rgba(30, 19, 38, 0.5)'
              type='foundation'
              fontSize={2}
              containerStyle={{marginLeft: 10}}
            />
            <FormInput
              value={this.state.password}
              onChangeText={password => this.setState({password, error: ''})}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              placeholder='********'
              fontSize={8}
              placeholderTextColor='rgba(30, 19, 38, 0.5)'
              secureTextEntry
              containerStyle={{borderBottomColor: 'transparent', alignSelf: 'center'}}
            />
          </View>
          {this.state.error !== '' && <Button
            small
            buttonStyle={{height: 20, backgroundColor: '#317e8c', marginVertical: 10, opacity: 0.7}}
            title={this.state.error}
            fontSize={12}
          />}
          <View style={{marginVertical: 20, width: '90%'}}>
            {this.state.screen === "login" ?
              <Button
                small
                buttonStyle={{height: 35, backgroundColor: '#161926', opacity: 0.8}}
                title={'LOGIN'}
                fontSize={12}
                color='#FEE2DB'
                onPress={this.onLogin}
              /> :
              <Button
                small
                buttonStyle={{height: 35, backgroundColor: '#161926', opacity: 0.8}}
                title={'SIGN UP'}
                fontSize={12}
                color='#FEE2DB'
                onPress={this.onSignUp}
              />
            }
            {this.state.screen === "login" ?
              <Text style={{fontSize: 14, marginTop: 16, color: '#161926', alignSelf: 'center'}} onPress={() => this.setState({screen: "signup"})}>Don't have an account? Sign up here</Text> :
              <Text style={{fontSize: 14, marginTop: 16, color: '#161926', alignSelf: 'center'}} onPress={() => this.setState({screen: "login"})}>Already have an account? Login here</Text>
            }
          </View>
        </View>
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center', opacity: 0.9}}>
          <Image
              style={{resizeMode: 'contain', width: 48, marginHorizontal: 15, marginTop: 20}}
              source={require('../potatobaby.png')}
          />
          <Image
              style={{resizeMode: 'contain', width: 110, marginHorizontal: 15}}
              source={require('../potato2x.png')}
            />
        </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrUser(){
      dispatch(getCurrUserThunk())
    },
    setUserInfo(id){
      dispatch(getUserInfoThunk(id))
    },
    loadUserEvents(id){
      dispatch(getEventsThunk(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
