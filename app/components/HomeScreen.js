import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerStyle: {
      backgroundColor: '#6B52AE',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Home Screen</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text style={styles.buttonText}>Go to Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F3F7FB' 
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6B52AE',
  },
  header: {
    color: '#6B52AE',
    fontSize: 40,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2F97C1',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
  },
})