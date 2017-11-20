import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
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
