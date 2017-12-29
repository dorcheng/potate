import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { firebaseRef } from '../server/firebase'
import { getCurrUserThunk } from '../reducers/user'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#EEEEEE', alignItems: 'center', height: 300, borderTopWidth: 30, borderTopColor:'#252530'}}>
        <Text style={{alignSelf: 'center'}}>Welcome {this.props.info.firstName}</Text>
        <Text>4 days old</Text>
        <View style={{alignItems: 'center', marginHorizontal: 40, marginVertical: 40}}>
          <Image
            style={{width: 120, height: 101}}
            source={require('../potatenormal.png')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({info: state.info})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrUser(){
      dispatch(getCurrUserThunk())
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
