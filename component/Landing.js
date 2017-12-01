import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Landing extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <div>
        <Button
          title="Log In"
          onPress={() =>
            navigate('Login')
          }
        />
        <Button
        title="New User"
        onPress={() =>
          navigate('CreateAcc')
        }
      />
    </div>
    );
  }
}