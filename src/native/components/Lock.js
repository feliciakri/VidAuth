import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <TouchableHighlight onPress={Actions.signUp}>
        <Image
          style={styles.logo}
          source={require('../../images/TMD.png')}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#056ecf',
    height: '100%',
    width: '100%'
  },
});
