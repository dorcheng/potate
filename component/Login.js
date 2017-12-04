import React, { Component } from 'react';
import * as firebase from 'firebase'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { firebaseRef } from '../server/firebase'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }

    this.onLogin = this.onLogin.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  onLogin(){
    this.setState({error: '', loading: true})
    const { email, password } = this.state
    firebaseRef.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.setState({error: '', loading: false})
      this.props.navigation.navigate('Timeline')
    }).catch(() => this.setState({error: 'Log in with correct email and password'}))
  }

  onSignUp(){
    this.setState({error: '', loading: true})
    const { email, password } = this.state
    firebaseRef.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.setState({error: '', loading: false})
      this.props.navigation.navigate('Timeline')}
    ).catch(() => this.setState({error: 'Password must be at least 6 characters long'}))
  }

  render() {
    console.log(this.state)
    return (
      <ScrollView>
        <FormLabel>Email</FormLabel>
        <FormInput
          value={this.state.email}
          onChangeText={email => this.setState({email, error: ''})}
          placeholder='john@smith.com'
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.state.password}
          onChangeText={password => this.setState({password, error: ''})}
          autoCapitalize="none"
          placeholder='********'
          secureTextEntry
        />
        <View>
          <Button
            buttonStyle={{height: 35}}
            title={'Login'}
            onPress={this.onLogin}
          />
          <Button
            buttonStyle={{height: 35}}
            title={'Sign up'}
            onPress={this.onSignUp}
          />
        </View>
        <Text>{this.state.error}</Text>
      </ScrollView>
    );
  }
}
