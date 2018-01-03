import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, Image, View, Dimensions } from 'react-native';
import { firebaseRef } from '../server/firebase'
import { getCurrUserThunk } from '../reducers/user'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const days = this.props.user.metadata ? Math.ceil((Date.now() - +this.props.user.metadata.a) / 86400000) : null
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#30303c', alignItems: 'center', height: 200, borderTopWidth: 35, borderTopColor:'#30303c'}}>
        <Text style={{marginTop: 12, fontWeight: 'bold', fontSize: 18, color: '#AC9C90'}}>{this.props.info.firstName && this.props.info.firstName.toUpperCase()} {this.props.info.lastName && this.props.info.lastName.toUpperCase()}</Text>
        <Text style={{fontSize: 14, color: '#ffde88', opacity: 0.5}}>{days} days old</Text>
        <Image
          style={{marginTop: 18, flex: 0.8, resizeMode: 'contain', width: 62}}
          source={require('../potatobaby.png')}
        />
        <Text style={{marginTop: 4, fontSize: 14, color: '#ffde88', opacity: 0.9}}>Level {Math.floor(days / 15)}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({info: state.info, user: state.user})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrUser(){
      dispatch(getCurrUserThunk())
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
