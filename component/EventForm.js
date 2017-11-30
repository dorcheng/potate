import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { addEvent } from '../reducers/events'
import { connect } from "react-redux"

class EventForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      description: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(){
    this.props.handleAddEvent(this.state)
    // also post to firebase and add this.state (new event)
  }

  render(){
    console.log(this.state)
    return(
      <KeyboardAvoidingView>
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Name</FormLabel>
        <FormInput
          name='name'
          inputStyle={{fontSize: 16}}
          onChangeText={(name) => this.setState({name})}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 10}}
          placeholder="Enter name of event"
          placeholderTextColor={'#4F4B49'}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Description</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
          onChangeText={(description) => this.setState({description})}
          underlineColorAndroid="#ffde88"
          selectionColor={'#ffde88'}
          tintColor={'#ffde88'}
          containerStyle={{marginLeft: 10}}
          placeholder="Enter description of event"
          placeholderTextColor={'#4F4B49'}
        />
        <FormLabel labelStyle={{fontSize: 17, color: '#AC9C90'}}>Type</FormLabel>
        <FormInput
          inputStyle={{fontSize: 16}}
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
          title='POTATE'
          onPress={this.onSubmit}
          />
      </KeyboardAvoidingView>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
	return {
		handleAddEvent(event) {
      console.log(event, "dispatching this")
			dispatch(addEvent(event))
		}
	}
}

export default connect(null, mapDispatchToProps)(EventForm)
