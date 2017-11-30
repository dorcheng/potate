import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { addEvent } from '../reducers/events'
import { connect } from "react-redux"

export default class EventForm extends Component {
  constructor(props){
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.nameInput.clearText()
    this.descriptionInput.clearText()
    this.props.onSubmit()
  }

  render(){
    console.log("PROPS frrom addevent", this.props)
    return(
      <KeyboardAvoidingView>
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Name</FormLabel>
        <FormInput
          ref={input => this.nameInput = input }
          inputStyle={{fontSize: 16}}
          onChangeText={(name) => this.props.onChangeName(name)}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
          placeholder="Enter name of event"
          placeholderTextColor={'#4F4B49'}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Description</FormLabel>
        <FormInput
          ref={input => this.descriptionInput = input }
          inputStyle={{fontSize: 16}}
          onChangeText={(description) => this.props.onChangeDescription(description)}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
          placeholder="Enter description of event"
          placeholderTextColor={'#4F4B49'}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Type</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 18}}
        />
        <Button
          small
          raised
          iconRight={{name: 'emoticon-excited', type:'material-community', color:'#282834'}}
          backgroundColor='#ffde88'
          borderRadius={30}
          textStyle={{color:'#282834', fontSize:18, fontWeight:'bold'}}
          containerViewStyle={{marginTop: 25, width: 250, borderRadius: 30, alignSelf: 'center'}}
          buttonStyle={{height: 35}}
          title='POTATE'
          onPress={this.onClick}
          />
      </KeyboardAvoidingView>
    )
  }

}
