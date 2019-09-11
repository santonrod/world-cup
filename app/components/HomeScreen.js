import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    justifyContent: 'center',
    color: 'green',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
})