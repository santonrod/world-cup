import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
    headerLeft: null,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerStyle: {
      backgroundColor: '#2F97C1',
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
          <Text style={styles.header}>Details Screen</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.push('Details')}
            >
              <Text style={styles.buttonText}>Go to Details... again</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.push('Home')}
            >
              <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
          </View>
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
  buttonsContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#2F97C1',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
  },
})