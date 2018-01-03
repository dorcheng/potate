import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseRef, database } from '../server/firebase'
import { ScrollView, Text, Picker } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { editName } from '../reducers/userInfo'


class Settings extends Component {
  constructor(props){
    super(props)
    console.log('PROPS', props)
    this.state = {
      user: firebaseRef.auth().currentUser,
      firstName: null,
      lastName: null,
      email: null,
      status: 'SAVE'
    }
    this.onSave = this.onSave.bind(this)
  }

  onSave(user){
    const { firstName, lastName, status, email } = this.state

    if (status === 'SAVE' && firstName !== null || lastName !== null || email !== null){
      this.setState({status: 'SAVED!'})
    }

    let update = firstName && lastName ? {firstName, lastName} : firstName ? {firstName} : lastName ? {lastName} : null

    if (update !== null) {
      database.ref(`users/${user.uid}`).update(update)
      .then(() => {
        setTimeout(() => this.setState({status: 'SAVE'}), 3000)
      })
    }

    if (email !== null){
      user.updateEmail(email).then(function() {
        this.setState({status: 'SAVE'})
      }).catch(function(error) {
        console.log(error)
        this.setState({status: 'ERROR'})
      })
    }
  }

  onDelete(user){
    user.delete().then(function() {
      console.log('Successfully deleted account')
    }).catch(function(error) {
      console.log(error)
    });
  }

  render() {
    console.log('settings state', this.state)
    return (
      <ScrollView style={{backgroundColor: '#252530'}}>
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>First</FormLabel>
        <FormInput
          defaultValue={this.props.info.firstName}
          inputStyle={{fontSize: 16}}
          onChangeText={(firstName) => this.setState({firstName})}
          underlineColorAndroid="#ffde88"
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
          placeholder={this.props.info.firstName}
          placeholderTextColor={'#4F4B49'}
          selectTextOnFocus={true}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Last</FormLabel>
        <FormInput
          defaultValue={this.props.info.lastName}
          inputStyle={{fontSize: 16}}
          onChangeText={(lastName) => this.setState({lastName})}
          underlineColorAndroid="#ffde88"
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
          placeholder={this.props.info.lastName}
          placeholderTextColor={'#4F4B49'}
          selectTextOnFocus={true}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Email</FormLabel>
        <FormInput
          defaultValue={this.props.user.email}
          inputStyle={{fontSize: 16}}
          onChangeText={(email) => this.setState({email})}
          underlineColorAndroid="#ffde88"
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
          placeholder={this.props.user.email}
          placeholderTextColor={'#4F4B49'}
          selectTextOnFocus={true}
        />
        <Button
          small
          raised
          iconRight={{name: 'emoticon-excited', type:'material-community', color:'#282834'}}
          backgroundColor={'#ffde88'}
          borderRadius={30}
          textStyle={{color:'#282834', fontSize:18, fontWeight:'bold'}}
          containerViewStyle={{marginTop: 25, width: 250, borderRadius: 30, alignSelf: 'center'}}
          buttonStyle={{height: 35}}
          title={this.state.status}
          onPress={() => this.onSave(this.state.user)}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user, info: state.info})

export default connect(mapStateToProps)(Settings)
