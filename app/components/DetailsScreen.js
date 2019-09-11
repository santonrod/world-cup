import React, { Component } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          style={styles.button}
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          style={styles.button}
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          style={styles.button}
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {

  },
  button: {
    flex: 3,
    marginBottom: '5px',
  },
})