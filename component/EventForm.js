import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class EventForm extends Component {
  constructor(){
    super()

    this.state={
      type: ""
    }
  }

  onChangeText(){

  }

  onSubmit(){

  }

  render(){
    return(
      <KeyboardAvoidingView>
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Name</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
          onChangeText={this.onChangeText}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 10}}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Description</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
          onChangeText={this.onChangeText}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 10}}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Type</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
          onChangeText={this.onChangeText}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 10}}
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
          title='POTATE' />
      </KeyboardAvoidingView>
    )
  }

}

{/* selectedValue={this.state.language} */}
// onValueChange={(lang) => this.setState({language: lang})}>
